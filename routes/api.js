module.exports = (app, router) => {
    const api = router.use('/api/v1/', router);
    require('./insight/users')(api, router)
}