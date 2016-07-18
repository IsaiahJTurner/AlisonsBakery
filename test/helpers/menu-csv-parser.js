var menuParser = require('../../helpers/menu-csv-parser.js');

var chai = require('chai');
chai.use(require("chai-as-promised"));
chai.should();

describe('menu-csv-parser', function() {
    describe('#parse()', function() {
        it('should return an array of MenuItems', function(done) {
            menuParser.parse('name,price,description,image_url,is_vegan,is_gluten_free\n"cake",9.99,"best evr","google.com",true,false\n').then(function(menu_items) {
                menu_items.should.be.a('array').and.have.lengthOf(1);
                menu_items[0].toObject().should.deep.equal({
                    name: 'cake',
                    price: '9.99',
                    description: 'best evr',
                    image_url: 'google.com',
                    is_vegan: 'true',
                    is_gluten_free: 'false'
                });
                done();
            });
        });
        it('should reject when a file is not properly formatted', function() {
            return menuParser.parse("not,a,menu\nat,all").should.be.rejectedWith(Error, "Could not read menu.");
        });
    });
});
