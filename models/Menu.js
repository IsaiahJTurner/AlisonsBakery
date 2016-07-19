var path = require("path");
var menuParser = require("../helpers/menu-csv-parser.js");
var fileReader = require("../helpers/file-reader.js");
var Q = require("q");
var async = require("async");
var parse = require("csv-parse");
var MenuItem = require("../models/MenuItem");

var MENU_DATABASE_PATH = '../data/menus';

var Menu = function(menu_items) {
    this.menu_items = menu_items;
    return this;
};

Menu.prototype.inspect = function(depth, opts) { // console.log modifications
    return this.toObject();
};

Menu.prototype.toObject = function(depth, opts) { // console.log modifications
    return {
        menu_items: this.menu_items.map(function(menu_item) {
            return menu_item.toObject();
        })
    };
};

Menu.prototype.toJSON = function(depth, opts) { // console.log modifications
    return this.toObject();
};

Menu.prototype.toString = function(depth, opts) { // console.log modifications
    return this.toJSON();
};

// returns MenuItems from the Menu that match the given query
Menu.prototype.query = function(query) {
    query = query.toLowerCase();
    return this.menu_items.filter(function(menu_item) {
        return menu_item.name.toLowerCase().indexOf(query) > -1; // contains the string
    });
};

Menu.findByCategory = function(category, directory) {
    if (!directory) {
        directory = path.resolve(__dirname, MENU_DATABASE_PATH);
    }
    return fileReader.read(path.resolve(directory, category + ".csv")).then(function(data) {
        return menuParser.parse(data);
    }).then(function(menu_items) {
        return new Menu(menu_items);
    });
};

Menu.findAll = function(directory) {
    if (!directory) {
        directory = path.resolve(__dirname, MENU_DATABASE_PATH)
    }
    return fileReader.readAll(directory).then(function(files) {

        var deferred = Q.defer(); // defer while parsing all the CSVs
        var menus = {};

        async.forEachOf(files, function(content, filename, callback) { // parse each CSV asyncronously
            menuParser.parse(content).then(function(menu_items) { // get MenuItems
                menus[filename.replace(".csv", "")] = new Menu(menu_items);
                callback(null); // create the Menu
            }, function(err) {
                callback(err);
            })
        }, function(err) {
            if (err) {
                return deferred.reject(err);
            }
            return deferred.resolve(menus);
        });
        return deferred.promise;
    });
};

module.exports = Menu;
