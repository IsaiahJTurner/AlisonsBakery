var Menu = require('../../models/Menu.js');
var MenuItem = require('../../models/MenuItem.js');

var path = require('path');

var chai = require('chai');
chai.use(require("chai-as-promised"));
chai.should();
var MENU_DATABASE_PATH = path.resolve(__dirname, "data", "menus");

describe('Menu', function() {
    describe('#findByCategory()', function() {
        it('should return a menu', function() {
            return Menu.findByCategory("breads", MENU_DATABASE_PATH).should.eventually.contain.all.keys('menu_items');
        });
        it('should reject when a category is not found', function() {
            return Menu.findByCategory("Non-Existant-Category", MENU_DATABASE_PATH).should.be.rejectedWith(Error, 'File does not exist.');
        });
    });
    describe('#findAll()', function() {
        it('should return all menu items', function() {
            var menus = Menu.findAll(MENU_DATABASE_PATH);
            return menus.should.eventually.have.property('breads')
                .that.is.an('object')
                .with.deep.property('menu_items')
                .that.is.an('array')
                .with.deep.property('[0]')
                .that.is.an('object')
                .that.deep.equals(new MenuItem({
                    name: 'Loaf Bread',
                    price: '12.00',
                    description: 'good bread',
                    image_url: 'https://yahoo.com',
                    is_vegan: 'false',
                    is_gluten_free: 'true'
                })).then(function() {
                    return menus.should.eventually.have.deep.property('cakes.menu_items[0]').that.deep.equals(new MenuItem({
                        name: 'Chocolate Cake',
                        price: '12.00',
                        description: 'good cake',
                        image_url: 'https://google.com',
                        is_vegan: 'false',
                        is_gluten_free: 'false'
                    }));
                });
        });
        it('should reject when a category is not found', function() {
            return Menu.findByCategory("Non-Existant-Category").should.be.rejectedWith(Error, 'File does not exist.');
        });
    });
});
