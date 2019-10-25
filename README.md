# Internet Engineering First Homework

The get API has two kwargs (must be included in the url).

The get API returns the "properties" attr of the objects which have polygons with the given point being inside of them.

The put api also writes to the local database which is in the project directory.

The put api accepts only one polygon data per request.

Because of the write file function the server can't handle more than 2 request per second w.o request drop.
```

Started phase 0, duration: 5s @ 12:19:44(+0330) 2019-10-25
Report @ 12:19:49(+0330) 2019-10-25
Elapsed time: 5 seconds
 Scenarios launched: 5
 Scenarios completed: 5
 Requests completed: 10
 RPS sent: 2.24
 Request latency:
 min: 8.9
 max: 12.9
 median: 10.1
 p95: 12.9
 p99: 12.9
 Codes:
 200: 10

All virtual users finished
Summary report @ 12:19:49(+0330) 2019-10-25
 Scenarios launched: 5
 Scenarios completed: 5
 Requests completed: 10
 RPS sent: 2.24
 Request latency:
 min: 8.9
 max: 12.9
 median: 10.1
 p95: 12.9
 p99: 12.9
 Scenario counts:
 0: 5 (100%)
 Codes:
 200: 10
```

The project functions properly with the ***Heroku local web*** command, it also deploys successfully on the Heroku server but it doesn't function properly and constantly reports ***Application Error*** due to the lack of required packages even though they are included in the package.json file (also tried running consecutive npm installs but didn't get any results).

```
git push heroku master

Counting objects: 15, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (15/15), done.
Writing objects: 100% (15/15), 1.92 KiB | 0 bytes/s, done.
Total 15 (delta 9), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote: 
remote: -----> Node.js app detected
remote:        
remote: -----> Creating runtime environment
remote:        
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:        NODE_VERBOSE=false
remote:        
remote: -----> Installing binaries
remote:        engines.node (package.json):  unspecified
remote:        engines.npm (package.json):   unspecified (use default)
remote:        
remote:        Resolving node version 12.x...
remote:        Downloading and installing node 12.13.0...
remote:        Using default npm version: 6.12.0
remote:        
remote: -----> Restoring cache
remote:        - node_modules
remote:        
remote: -----> Installing dependencies
remote:        Installing node modules (package.json + package-lock)
remote:        
remote:        > core-js@3.3.3 postinstall /tmp/build_2a14d0f6426b02888764916c071b01ca/node_modules/core-js
remote:        > node postinstall || echo "ignore"
remote:        
remote:        
remote:        > nodemon@1.19.4 postinstall /tmp/build_2a14d0f6426b02888764916c071b01ca/node_modules/nodemon
remote:        > node bin/postinstall || exit 0
remote:        
remote:        Love nodemon? You can now support the project via the open collective:
remote:         > https://opencollective.com/nodemon/donate
remote:        
remote:        added 380 packages from 193 contributors and audited 6729 packages in 15.031s
remote:        found 0 vulnerabilities
remote:        
remote:        
remote: -----> Build
remote:        Running build
remote:        
remote:        > express-es6-sample@0.0.0 build /tmp/build_2a14d0f6426b02888764916c071b01ca
remote:        > npm run clean && babel ./src --out-dir dist
remote:        
remote:        
remote:        > express-es6-sample@0.0.0 clean /tmp/build_2a14d0f6426b02888764916c071b01ca
remote:        > rimraf dist
remote:        
remote:        Successfully compiled 3 files with Babel.
remote:        
remote: -----> Pruning devDependencies
remote:        removed 380 packages and audited 530 packages in 7.005s
remote:        found 0 vulnerabilities
remote:        
remote:        
remote: -----> Caching build
remote:        - node_modules
remote:        
remote: -----> Build succeeded!
remote: -----> Discovering process types
remote:        Procfile declares types     -> (none)
remote:        Default types for buildpack -> web
remote: 
remote: -----> Compressing...
remote:        Done: 27.7M
remote: -----> Launching...
remote:        Released v6
remote:        https://fast-earth-97648.herokuapp.com/ deployed to Heroku
remote: 
remote: Verifying deploy... done.
To https://git.heroku.com/fast-earth-97648.git
   f240dd2..8714390  master -> master

```
