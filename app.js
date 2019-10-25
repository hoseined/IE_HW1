var express = require('express');
var fs = require('fs');
var path = require('path');
var insidePolygon = require('geolocation-utils').insidePolygon
var temp_name_db = 'db.json';
var local_database;
const app = express();

fs.readFile(path.resolve(__dirname, temp_name_db), 'UTF-8', (err, data) => {
    if (!err){
        local_database = JSON.parse(data);
        console.log(__dirname);
    }
    else{
        console.log(err)
        console.log("'database' can not be found.");
    }
});

app.listen(3000, () => {
    app.get('/gis/testpoint/:lat/:lon/', (req, res, next) => {
        var coordinates = [parseFloat(req.params.lat, 10), parseFloat(req.params.lon, 10)]
        var result = { 'polygons': []}
        for (var obj of local_database['features']){
                if (obj['geometry']['type'] === 'Polygon'){
                var polygon = obj['geometry']['coordinates'][0]
                if (insidePolygon(coordinates, polygon)){
                    result['polygons'].push(obj['properties'])
                }
            }
        }
        res.send(result);
    })

    app.put('/gis/addpolygon/', (req, res, next) => {
        local_database['features'].push(req.body);
        fs.writeFile(path.resolve(__dirname, '../'+temp_name_db), JSON.stringify(local_database), (err) => {
            if (err){
            console.log('wrong data format');
            }
            else{
            console.log("data saved to 'database'.")
            }
        })
        res.send(local_database);
    })
  
    app.get('/test/', (req, res, next) => {
        res.send("test_deploy")
    })
})
