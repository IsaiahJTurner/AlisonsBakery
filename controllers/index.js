var path = require("path");

exports.get = function(req, res) {
    if (req.host === "localhost") {
        return res.sendFile(path.resolve(__dirname, "../index.html"));
    }
    res.redirect("https://isaiahjturner.github.io/AlisonsBakery?api_base=" + req.protocol + '://' + req.get('host'));
};
