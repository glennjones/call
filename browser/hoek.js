'use strict';
// basic replacement for HAPI.js Hoek module


module.exports = {

    applyToDefaults: function (obj, src) {
        for (var key in src) {
            if (src.hasOwnProperty(key)) obj[key] = src[key];
        }
        return obj;
    },

    escapeRegex: function (string) {

        // Escape ^$.*+-?=!:|\/()[]{},
        return string.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, '\\$&');
    },

    assert: function (condition, message) {
        if(!condition){
            throw new Error(message);
        }
    }
}
