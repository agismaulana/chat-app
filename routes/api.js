const UserController = require('./../controllers/UserController');

module.exports = (app, router) => {
    router.get('/user', UserController.GetAllUser);
    router.get('/user/:id', UserController.GetDetailUser);
    router.post('/user', UserController.createUser);

    app.use('/api/v1/', router);
}