var Q = require("q");
var async = require("async");
var parse = require("csv-parse");
var MenuItem = require("../models/MenuItem");

// takes a string of CSV data and resolves a Promise with a MenuItems array
exports.parse = function(menu_csv) {
    var deferred = Q.defer();
    parse(menu_csv, {
        columns: true // Affects the result data set in the sense that records will be objects instead of arrays.
    }, function(err, objects) {
        if (err) {
            if (err.message === "Number of columns on line 2 does not match header") {
                return deferred.reject(Error("Could not read menu."));
            } else {
                return deferred.reject(Error("Unknown error."));
            }
        }
        var menu_items = [];
        for (var i = 0; i < objects.length; i++) {
            var object = objects[i];
            var menu_item = new MenuItem(object);
            menu_items.push(menu_item);
        }
        deferred.resolve(menu_items);
    });

    return deferred.promise;
};
