'use strict';
// pulls in node module and export with rollup

import CallRouter from '../lib/index';


function urltoPath(url) {

    if (!url || url.trim() === '') {
        throw new Error('No url provided');
    }
    return new URL(url).pathname;
}


function normalisePath(path, options) {

    checkStructure( path, 'path' );
    var url = new URL('http://example.org' + path);
    if (endsWith(url.pathname, '/')) {
        url.pathname = url.pathname.slice(0, -1);
    }
    return url.pathname;
}


function normaliseRoute( route ) {

    checkStructure( route, 'route' );
    if (endsWith(route, '/')) {
        route = route.slice(0, -1);
    }
    return route;
}


function checkStructure( str, name ){

    if (!str || str.trim() === '') {
        throw new Error('No ' + name + ' provided');
    }
    if (str.indexOf('/') !== 0) {
        throw new Error('The ' + name + ' does not start with a backslash');
    }
}


function endsWith(str, match, position) {
    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > str.length) {
        position = str.length;
    }
    position -= match.length;
    var lastIndex = str.lastIndexOf(match, position);
    return lastIndex !== -1 && lastIndex === position;
}


CallRouter.urltoPath = urltoPath;
CallRouter.normaliseRoute = normaliseRoute;
CallRouter.normalisePath = normalisePath;


export default CallRouter
