const userController = require('../app/controller/user.controller');

module.exports = (app) => {

    /**
    * 
    */
    app.get('/user', function (req, res, next) {
        userController.getAll(req, res, next);
    })

    /**
    * 
    */
    app.get('/user/byCode/:code', function (req, res, next) {
        userController.getByNroDoc(req, res, next);
    })

    /**
     * 
     */
    app.post('/user', function (req, res, next) {
        userController.createUser(req, res, next);
    })

    /**
     * 
     */
    app.put('/user', function (req, res, next) {
        userController.updateuser(req, res, next);
    })

    /**
     * 
     */
    app.delete('/user', function (req, res, next) {
        userController.deleteuser(req, res, next);
    })
}