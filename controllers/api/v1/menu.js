var Menu = require("../../../models/Menu.js");
var async = require("async");

exports.get = function(req, res) {
    var query = req.query.query;
    var category = req.query.category;
    var menu_items;
    async.waterfall([
        function(callback) { // retrieve and fitler (if needed) menus
            if (category) {
                Menu.findByCategory(category).then(function(menu) {
                    callback(null, [menu]);
                }, function(err) {
                    callback(err);
                });
            } else {
                // all menu's returned
            }
        },
        function(menus) { // filter menu items (if needed)
            if (query) {

            }
            // combine the MenuItems from all the Menus into one big array
            var menu_items = [];
            for (var i = 0; i < menus.length; i++) {
                var menu = menus[i];
                menu_items.join(menu.menu_items);
            }

            callback(null, menu_items);
        }
    ], function(err, menu_items) {
        if (err) {
            return res.json({
                errors: [{
                    title: err
                }]
            });
        }
        return res.json({
            menu_items: menu_items
        })
    });
};
