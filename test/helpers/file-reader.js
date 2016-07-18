var fileReader = require('../../helpers/file-reader.js');
var path = require("path");

var chai = require('chai');
chai.use(require("chai-as-promised"));
chai.should();

describe('file-reader', function() {
    describe('#read()', function() {
        it('should return the contents of a file', function() {
            return fileReader.read(path.resolve(__dirname, "file-reader-example.txt")).should.eventually.equal("hello world\n");
        });
        it('should reject when a file is not found', function() {
            return fileReader.read(path.resolve(__dirname, "Non-Existant-File")).should.be.rejectedWith(Error, "File does not exist.");
        });
    });
});
