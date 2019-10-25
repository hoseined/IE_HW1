# Internet Engineering First Homework

## heroku_url : https://rocky-waters-48383.herokuapp.com

The get API has two kwargs (must be included in the url).

The get API returns the "properties" attr of the objects which have polygons with the given point being inside of them.

The put api also writes to the local database which is in the project directory.

The put api accepts only one polygon data per request.

Because of the write file function the server can't handle more than 2 request per second w.o request drop.
```
artillery run artillery_test.yml

Started phase 0, duration: 60s @ 20:00:17(+0330) 2019-10-25
Report @ 20:00:27(+0330) 2019-10-25
Elapsed time: 10 seconds
  Scenarios launched:  199
  Scenarios completed: 90
  Requests completed:  182
  RPS sent: 29.36
  Request latency:
    min: 205.1
    max: 4878
    median: 1019.8
    p95: 4444.8
    p99: 4831.2
  Codes:
    200: 182

Report @ 20:00:37(+0330) 2019-10-25
Elapsed time: 20 seconds
  Scenarios launched:  200
  Scenarios completed: 97
  Requests completed:  200
  RPS sent: 30.13
  Request latency:
    min: 203.2
    max: 10229
    median: 5360.6
    p95: 9651.1
    p99: 10105.1
  Codes:
    200: 200

Report @ 20:00:47(+0330) 2019-10-25
Elapsed time: 30 seconds
  Scenarios launched:  200
  Scenarios completed: 117
  Requests completed:  233
  RPS sent: 31.73
  Request latency:
    min: 197.9
    max: 14486
    median: 10390.8
    p95: 14164.1
    p99: 14447.5
  Codes:
    200: 233

Report @ 20:00:57(+0330) 2019-10-25
Elapsed time: 40 seconds
  Scenarios launched:  200
  Scenarios completed: 110
  Requests completed:  217
  RPS sent: 30.83
  Request latency:
    min: 213.7
    max: 19035.7
    median: 913.6
    p95: 18381.2
    p99: 18906.5
  Codes:
    200: 217

Report @ 20:01:07(+0330) 2019-10-25
Elapsed time: 50 seconds
  Scenarios launched:  200
  Scenarios completed: 104
  Requests completed:  209
  RPS sent: 30.43
  Request latency:
    min: 206.4
    max: 23745.9
    median: 841.4
    p95: 23142.5
    p99: 23545.9
  Codes:
    200: 209

Report @ 20:01:17(+0330) 2019-10-25
Elapsed time: 1 minute, 0 seconds
  Scenarios launched:  200
  Scenarios completed: 108
  Requests completed:  217
  RPS sent: 30.93
  Request latency:
    min: 205.8
    max: 28211.6
    median: 23819.3
    p95: 27812.9
    p99: 28199.9
  Codes:
    200: 217

Report @ 20:01:27(+0330) 2019-10-25
Elapsed time: 1 minute, 10 seconds
  Scenarios launched:  1
  Scenarios completed: 50
  Requests completed:  103
  RPS sent: 5.3
  Request latency:
    min: 217.6
    max: 35927.6
    median: 28298.1
    p95: 35674
    p99: 35899.2
  Codes:
    200: 103

Report @ 20:01:37(+0330) 2019-10-25
Elapsed time: 1 minute, 20 seconds
  Scenarios launched:  0
  Scenarios completed: 110
  Requests completed:  220
  RPS sent: 11.27
  Request latency:
    min: 207.8
    max: 40288.5
    median: 35921.1
    p95: 39991.9
    p99: 40222.5
  Codes:
    200: 220

Report @ 20:01:47(+0330) 2019-10-25
Elapsed time: 1 minute, 30 seconds
  Scenarios launched:  0
  Scenarios completed: 108
  Requests completed:  215
  RPS sent: 10.61
  Request latency:
    min: 209.2
    max: 44864.7
    median: 790.3
    p95: 44421.9
    p99: 44811.2
  Codes:
    200: 215

Report @ 20:01:57(+0330) 2019-10-25
Elapsed time: 1 minute, 40 seconds
  Scenarios launched:  0
  Scenarios completed: 113
  Requests completed:  226
  RPS sent: 11.38
  Request latency:
    min: 210.2
    max: 49220.9
    median: 22845.5
    p95: 48444.7
    p99: 49172.3
  Codes:
    200: 226

Report @ 20:02:07(+0330) 2019-10-25
Elapsed time: 1 minute, 50 seconds
  Scenarios launched:  0
  Scenarios completed: 92
  Requests completed:  187
  RPS sent: 9.46
  Request latency:
    min: 214.7
    max: 54641.2
    median: 49314
    p95: 54090.7
    p99: 54524.6
  Codes:
    200: 187

Report @ 20:02:17(+0330) 2019-10-25
Elapsed time: 2 minutes, 0 seconds
  Scenarios launched:  0
  Scenarios completed: 95
  Requests completed:  187
  RPS sent: 9.55
  Request latency:
    min: 207.4
    max: 59808.5
    median: 958.5
    p95: 58827.2
    p99: 59683.5
  Codes:
    200: 187

Report @ 20:02:18(+0330) 2019-10-25
Elapsed time: 2 minutes, 1 second
  Scenarios launched:  0
  Scenarios completed: 6
  Requests completed:  4
  RPS sent: NaN
  Request latency:
    min: 405.6
    max: 761.6
    median: 612.4
    p95: 761.6
    p99: 761.6
  Codes:
    200: 4

All virtual users finished
Summary report @ 20:02:18(+0330) 2019-10-25
  Scenarios launched:  1200
  Scenarios completed: 1200
  Requests completed:  2400
  RPS sent: 19.84
  Request latency:
    min: 197.9
    max: 59808.5
    median: 1103.6
    p95: 53489.6
    p99: 57825.2
  Scenario counts:
    0: 1200 (100%)
  Codes:
    200: 2400
```

## heroku deployment details
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
