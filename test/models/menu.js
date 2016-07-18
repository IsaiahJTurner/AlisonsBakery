var Menu = require('../../models/Menu.js');

var chai = require('chai');
chai.use(require("chai-as-promised"));
chai.should();

describe('Menu', function() {
    describe('#findByCategory()', function() {
        it('should return a menu', function() {
            return Menu.findByCategory("breads").should.eventually.contain.all.keys('menu_items');
        });
        it('should reject when a category is not found', function() {
            return Menu.findByCategory("Non-Existant-Category").should.be.rejectedWith(Error, 'File does not exist.');
        });
    });
});
