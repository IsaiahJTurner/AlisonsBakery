var path = require("path");

exports.get = function(req, res) {
    if (req.hostname === "localhost") {
        return res.status(200).sendFile(path.resolve(__dirname, "../index.html"));
    }
    res.redirect("https://isaiahjturner.github.io/AlisonsBakery?api_base=" + req.protocol + '://' + req.get('host'));
};
