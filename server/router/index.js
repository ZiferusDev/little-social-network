const Router = require('express')
const router = new Router()
const userController = require("../controllers/user-controller");
const { body } = require("express-validator")

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength( {min: 3, max: 32}),
    userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/refresh', userController.refresh);

module.exports = router;