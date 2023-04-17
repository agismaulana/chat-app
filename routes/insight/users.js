const UserController = require('./../../controllers/UserController');
module.exports = (app, router) => {
    router.get('/users', UserController.GetAllUser);
    router.all('/users/:id', UserController.GetDetailUser);
    router.post('/users', UserController.CreateUser);
    // router.patch('/:id', UserController.UpdateUser);
    // router.delete('/:id', UserController.DeleteUser);

    app.use('/', router)
}