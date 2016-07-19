var Menu = require("../../../models/Menu.js");
var async = require("async");

exports.get = function(req, res) {
    var query = req.query.query;
    var category = req.query.category;
    var menu_items;
    async.waterfall([
        function(callback) { // retrieve and fitler (if needed) menus
            if (category) {
                return Menu.findByCategory(category).then(function(menu) {
                    var menus = [menu]; // next waterfall function takes array
                    callback(null, menus);
                }, function(err) {
                    callback(err);
                });
            } else {
                Menu.findAll().then(function(menus) {
                    callback(null, menus);
                }, function(err) {
                    callback(err);
                });
            }
        },
        function(menus, callback) { // filter menu items (if needed)

            var menu_items = [];

            for (var category in menus) {
                var menu = menus[category];
                if (query) { // if we are querying, get MenuItems results from Menu.query
                    var results = menu.query(query);
                    menu_items = menu_items.concat(results); // combine results together
                } else {
                    menu_items = menu_items.concat(menu.menu_items);
                }
            }
            callback(null, menu_items);
        }
    ], function(err, menu_items) {
        if (err) {
            return res.json({
                errors: [{
                    title: err.message
                }]
            });
        }
        res.json({
            menu_items: menu_items.map(function(menu_item) {
                return menu_item.toJSON();
            })
        });
    });
};
