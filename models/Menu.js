var path = require("path");
var menuParser = require("../helpers/menu-csv-parser.js");
var fileReader = require("../helpers/file-reader.js");
var Q = require("Q");
var async = require("async");
var parse = require("csv-parse");
var MenuItem = require("../models/MenuItem");
var Menu = require("../models/Menu");

var Menu = function(menu_items) {
    this.menu_items = menu_items;
    return this;
};

Menu.prototype.inspect = function(depth, opts) {
    return this.menu_items;
};

Menu.findByCategory = function(category) {
    return fileReader.read(path.resolve(__dirname, "../menus", category + ".csv")).then(function(data) {
        return menuParser.parse(data);
    }).then(function(menu_items) {
        return Menu(menu_items);
    });
};

module.exports = Menu;
