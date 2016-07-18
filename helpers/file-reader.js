var fs = require('fs');
var Q = require("Q");

// resolves a promise with the String contents of the file at the given path
exports.read = function(path) {
    var deferred = Q.defer();

    var data = "";
    var error;
    var stream = fs.createReadStream(path);
    stream.on('data', function(buffer) {
        data += buffer.toString();
    });
    stream.on('error', function(err) {
        if (!error) { // if we havent set the error message yet
            if (err.errno === -2) { // file not found error
                error = Error("File does not exist.");
            } else {
                error = Error("Unknown error.");
                console.log(err);
            }
            return deferred.reject(error);
        }
    });
    stream.on('end', function() {
        if (!error) {
            deferred.resolve(data);
        }
    });
    return deferred.promise;
};
