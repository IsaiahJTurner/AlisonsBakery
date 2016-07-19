var fs = require('fs');
var Q = require("q");
var path = require("path");
var async = require("async");

// resolves a promise with the String contents of the file at the given path
exports.read = function(path) {
    var deferred = Q.defer();

    var data = "";
    var error;
    var stream = fs.createReadStream(path); // TODO: switch to readFile/callbacks for code consistancy
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

// resolves a promise of a Object of files { file_name: contents(String) } for each file in the given directory
// this does not use exports.read to avoid creating any read streams and promise objects
exports.readAll = function(directory) {
    var deferred = Q.defer();

    var error;
    fs.readdir(directory, function(err, filenames) {
        if (err) {
            if (err.errno === -2) { // file not found error
                error = Error("Folder does not exist.");
            } else {
                error = Error("Unknown error.");
                console.log(err);
            }
            return deferred.reject(error);
        }

        var paths = filenames.map(function(filename) { // add directory (full path) to filenames
            return path.resolve(directory, filename);
        });

        async.map(paths, fs.readFile, function(err, contents) {
            if (err) {
                console.log(err.toString());
                return deferred.reject(Error(err));
            }

            // convert array of keys and array of values to Object
            var files = {};
            for (var i = 0; i < paths.length; i++) {
                files[filenames[i]] = contents[i].toString('utf-8');
            }
            deferred.resolve(files);
        });
    });
    return deferred.promise;
};
