module.exports = function (app) {

    app.get('/ucs1/uc-switch-is-coming', function(req, res) {
        res.render('ucs1/uc-switch-is-coming');
    });
    app.post('/ucs1/uc-switch-is-coming', function(req, res) {
        res.redirect('/ucs1/enter-postcode');
    });

    app.get('/ucs1/postcode', function(req, res) {
        res.render('ucs1/postcode');
    });
    app.post('/ucs1/postcode', function(req, res) {
        console.log(req.body);
        req.session['ucs1-postcode'] = req.body;
        res.redirect('/ucs1/bank');
    });

    app.get('/ucs1/bank', function(req, res) {
        res.render('ucs1/bank');
    });
    app.post('/ucs1/bank', function(req, res) {
        console.log(req.body);
        req.session['ucs1-bank'] = req.body;
        res.redirect('/ucs1/email');
    });

    app.get('/ucs1/email', function(req, res) {
        res.render('ucs1/email');
    });
    app.post('/ucs1/email', function(req, res) {
        console.log(req.body);
        req.session['ucs1-email'] = req.body;
        res.redirect('/ucs1/adults');
    });

    app.get('/ucs1/adults', function(req, res) {
        res.render('ucs1/adults');
    });
    app.post('/ucs1/adults', function(req, res) {
        console.log(req.body);
        req.session['ucs1-adults'] = req.body;
        res.redirect('/ucs1/children');
    });

    app.get('/ucs1/children', function(req, res) {
        res.render('ucs1/children');
    });
    app.post('/ucs1/children', function(req, res) {
        console.log(req.body);
        req.session['ucs1-children'] = req.body;
        res.redirect('/ucs1/benefits');
    });

    app.get('/ucs1/benefits', function(req, res) {
        res.render('ucs1/benefits');
    });
    app.post('/ucs1/benefits', function(req, res) {
        console.log(req.body);
        req.session['ucs1-benefits'] = req.body;
        res.redirect('/ucs1/outcome');
    });

    app.get('/ucs1/outcome', function(req, res) {
        res.render('ucs1/outcome', {
            postcode  : req.session['ucs1-postcode'],
            bank      : req.session['ucs1-bank'],
            email     : req.session['ucs1-email'],
            adults    : req.session['ucs1-adults'],
            children  : req.session['ucs1-children'],
            benefits  : req.session['ucs1-benefits'],
        });
    });
    app.post('/ucs1/outcome', function(req, res) {
        req.session.destroy();
        res.redirect('/ucs1/uc-switch-is-coming');
    });



};
