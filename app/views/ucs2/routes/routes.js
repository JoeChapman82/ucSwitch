module.exports = function (app) {

    app.get('/ucs2/uc-switch-is-coming', function(req, res) {
        res.render('ucs2/uc-switch-is-coming');
    });
    app.post('/ucs2/uc-switch-is-coming', function(req, res) {
        res.redirect('/ucs2/enter-postcode');
    });

    app.get('/ucs2/postcode', function(req, res) {
        res.render('ucs2/postcode');
    });
    app.post('/ucs2/postcode', function(req, res) {
        console.log(req.body);
        req.session['ucs2-postcode'] = req.body;
        res.redirect('/ucs2/bank');
    });

    app.get('/ucs2/bank', function(req, res) {
        res.render('ucs2/bank');
    });
    app.post('/ucs2/bank', function(req, res) {
        req.session['ucs2-bank'] = req.body;
        res.redirect('/ucs2/email');
    });

    app.get('/ucs2/email', function(req, res) {
        res.render('ucs2/email');
    });
    app.post('/ucs2/email', function(req, res) {
        console.log(req.body);
        req.session['ucs2-email'] = req.body;
        res.redirect('/ucs2/adults');
    });

    app.get('/ucs2/adults', function(req, res) {
        res.render('ucs2/adults');
    });
    app.post('/ucs2/adults', function(req, res) {
        console.log(req.body);
        req.session['ucs2-adults'] = req.body;
        res.redirect('/ucs2/children');
    });

    app.get('/ucs2/children', function(req, res) {
        res.render('ucs2/children');
    });
    app.post('/ucs2/children', function(req, res) {
        console.log(req.body);
        req.session['ucs2-children'] = req.body;
        res.redirect('/ucs2/benefits');
    });

    app.get('/ucs2/benefits', function(req, res) {
        res.render('ucs2/benefits');
    });
    app.post('/ucs2/benefits', function(req, res) {
        req.session['ucs2-benefits'] = req.body;
        res.redirect('/ucs2/outcome');
    });

    app.get('/ucs2/outcome', function(req, res) {
        if(req.session['ucs2-benefits']) {
        res.render('ucs2/outcome', {
            postcode  : req.session['ucs2-postcode'],
            bank      : req.session['ucs2-bank'],
            email     : req.session['ucs2-email'],
            adults    : req.session['ucs2-adults'],
            children  : req.session['ucs2-children'],
            benefits  : req.session['ucs2-benefits'],
        });
    } else {
        res.redirect('/ucs2/uc-switch-is-coming');
    }
    });
    app.post('/ucs2/outcome', function(req, res) {
        req.session.destroy();
        res.redirect('/ucs2/uc-switch-is-coming');
    });



};
