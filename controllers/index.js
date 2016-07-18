exports.get = function(req, res) {
    res.redirect("https://isaiahjturner.github.io/AlisonsBakery?api_base=" + req.protocol + '://' + req.get('host'));
};
