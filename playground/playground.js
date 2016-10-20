

var inputRoute;
var inputPath;
var alertNodeList;
var alertMatch;
var alertNoMatch;
var resultsNode;
var resultsList;
var normalise;


document.addEventListener("DOMContentLoaded", function (event) {
    inputRoute = document.getElementById('inputRoute');
    inputPath = document.getElementById('inputPath');
    alertNodeList = document.querySelectorAll('.alert');
    alertMatch = document.querySelector('.is-match');
    alertNoMatch = document.querySelector('.no-match');
    resultsNode = document.getElementById('results');
    resultsList = document.getElementById('resultsList');
    normalise = document.getElementById('normalise');

    updateResults();

    inputRoute.addEventListener("input", function (event) {
        updateResults();
    })
    inputPath.addEventListener("input", function (event) {
        updateResults();
    })
    normalise.addEventListener("change", function (event) {
        updateResults();
    })

});


function updateResults(){
    var result = testPath(inputRoute.value, inputPath.value);
    console.log(JSON.stringify(result));


    for (var i = 0; i < alertNodeList.length; ++i) {
        alertNodeList[i].classList.add('display-none');
    }
    resultsNode.classList.add('display-none');
    alertNoMatch.innerHTML = 'The path does not match the route';

    if (result && !result.err) {
        alertMatch.classList.remove('display-none');
        if(Array.isArray(result.paramsArray) && result.paramsArray.length > 0){
            resultsNode.classList.remove('display-none');
            resultsList.innerHTML = '';
            for(var key in result.params){
                var li = document.createElement('li');
                li.appendChild(document.createTextNode(key + ': ' + result.params[key]))
                resultsList.appendChild(li);
            }

        }
    } else {
        alertNoMatch.classList.remove('display-none');
        if(result && result.err){
            alertNoMatch.innerHTML = result.err;
        }
    }
}


function testPath(route, path) {
    if(route.trim() === ''){
        return {err: 'Cannot read route'}
    }
    if(path.trim() === ''){
        return {err: 'Cannot read path'}
    }


    try{
        if(normalise.checked){
            if(path.indexOf('://') > -1){
                path = HAPIRouter.urltoPath( path );
            }
            path = HAPIRouter.normalisePath( path );
            route = HAPIRouter.normaliseRoute( route );
        }

        var router = new HAPIRouter.Router();
        router.add({ method: 'get', path: route }, route);
        return router.route('get', path);
    }catch(err){
        return {err: err.message}
    }
}