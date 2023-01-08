module.exports = (app, router) => {
    router.get('/',  function(req, res) {
        res.send('This Api run on node js');
    })
    require('./api')(app, router);
    app.use('/', router);
}