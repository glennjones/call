# HAPIRouter
The HAPI HTTP Router is a fork of [Call](https://github.com/hapijs/call) wrap for use in the browser.

There is a HTML example of the router in a playgroud directory.

## Usage
```javascript
var route = '/path/{item}/';
var path =  '/path/my-value/';

var router = new HAPIRouter.Router();
router.add({ method: 'get', path: route }, route);
var result = router.route('get', path);

result > {"params":{"item":"my-value"},"paramsArray":["my-value"],"route":"/path/{item}"}
```

## Helpers
These function are not not part of the core [Call](https://github.com/hapijs/call) module. They are added by this project.
```javascript
if(path.indexOf('://') > -1){
    path = HAPIRouter.urltoPath( path );
}
path = HAPIRouter.normalisePath( path );
route = HAPIRouter.normaliseRoute( route );
```
Using the above code will allow to check full url as well as paths for a match. It will also strip the tailing backslashes
from both the route and path. Querystrings and hash fragments are also removed from paths.

## Original code
Please view the [Call github repo](https://github.com/hapijs/call) for the information on the maintainer, contributors and licence.


## Rollup build command
./node_modules/.bin/rollup -c