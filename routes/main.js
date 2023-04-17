module.exports = (app, router) => {
    require('./api')(app, router);
    app.use('/', router);
}