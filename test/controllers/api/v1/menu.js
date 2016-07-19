var request = require('supertest');
var path = require("path");
var app = require(path.resolve(__dirname, "../../../../app.js")).app;

describe('GET /api/v1/menu', function() {
    // TODO: increase test coverage
    it('should respond with json', function(done) {
        request(app)
            .get('/api/v1/menu')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
