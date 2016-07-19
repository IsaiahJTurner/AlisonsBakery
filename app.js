var express = require('express');
var _ = require('underscore');

var app = express();

app.use('/frontend', express.static('frontend'));

app.set('port', (process.env.PORT || 3000));

var api = express.Router();

app.use("/api/v1", api);

var controllers = {
    index: require('./controllers/'),
    api: {
        v1: {
            menu: require('./controllers/api/v1/menu.js')
        }
    }
};

app.get("/", controllers.index.get);

api.get("/menu", controllers.api.v1.menu.get);

app.listen(app.get('port'), function() {
    console.log('Started on port ' + app.get("port") + '!');
});

exports.app = app;
