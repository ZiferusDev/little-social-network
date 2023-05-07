const Router = require('express')
const router = new Router()
const controller = require('./authController')
const { check } = require("express-validator")
const authMiddleware = require("./middleware/authMiddleware")
const roleMiddleware = require("./middleware/roleMiddleware")


router.post('/registration', [
    check('email', "Введённые данные не явдляются почтовым адресом").isEmail(),
    check('password', "Пароль должен быть больше 7 и меньше 20 символов").isLength( {min: 7, max: 20}),
], controller.registration);
router.post('/login', controller.login);
router.get('/users', roleMiddleware(['ADMIN']), controller.getUsers);

module.exports = router;