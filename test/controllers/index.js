var request = require('supertest');
var path = require("path");
var app = require(path.resolve(__dirname, "../../app.js")).app;

describe('GET /', function() {
    it('should respond with html on localhost', function(done) {
        request(app)
            .get('/')
            .set("Host", "localhost")
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(200, done);
    });
    it('should respond with redirect on production', function(done) {
        request(app)
            .get('/')
            .expect('Content-Type', /plain/)
            .expect(302, done);
    });
});
