var fileReader = require('../../helpers/file-reader.js');
var path = require("path");

var chai = require('chai');
chai.use(require("chai-as-promised"));
chai.should();

describe('file-reader', function() {
    describe('#read()', function() {
        it('should return the contents of a file', function() {
            return fileReader.read(path.resolve(__dirname, "file-reader-examples", "1.txt")).should.eventually.equal("hello world\n");
        });
        it('should reject when a file is not found', function() {
            return fileReader.read(path.resolve(__dirname, "Non-Existant-File")).should.be.rejectedWith(Error, "File does not exist.");
        });
    });
    describe('#readAll()', function() {
        it('should return the contents of all files', function() {
            return fileReader.readAll(path.resolve(__dirname, "file-reader-examples")).should.eventually.deep.equal({
                "1.txt": "hello world\n",
                "2.csv": 'name,price,description,image_url,is_vegan,is_gluten_free\n"Disappearing Chocolate Cake",12.00,"Three layers of dense chocolate cake, frosted and filled with rich chocolate buttercream. It will be gone before you can say ‘Abracadabra’.","https://www.hersheys.com/recipes/images/detail/184_en­us_large.jpg",false,false\n'
            });
        });
        it('should reject when a folder is not found', function() {
            return fileReader.readAll(path.resolve(__dirname, "Non-Existant-Folder")).should.be.rejectedWith(Error, "Folder does not exist.");
        });
    });
});
