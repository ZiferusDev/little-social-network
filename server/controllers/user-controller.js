
const userService = require ('../service/user-service');
const {validationResult} = require('express-validator');
const ApiError = require("../exceptions/api-error")

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return next(ApiError.BadRequest("Ошибка при валидации", errors.array()))
            }
            const {email, password} = req.body; // const {email, password, name, surname, city, dateOfBirth, friends, posts} = req.body;
            const userData = await userService.registration(email, password)
            //const user = new User( {email, password: hashPassword, name, surname, city, dateOfBirth, friends, posts, roles: [userRole.value]} );
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch(e) {
            next(e);
        }
    }
    
    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await userService.login(email, password);

            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch(e) {
            next(e);
            res.status(400).json({message: 'Login error'})
        }
    }
    
    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token); // Можно просто 200 вернуть, тут пока что пусть будет
        } catch(e) {
            next(e);
        }
    }

    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const userData = await userService.refresh(refreshToken);

            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch(e) {
            next(e);
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find()
            // const userRole = new Role();
            // const adminRole = new Role({value: "ADMIN"});
            // await userRole.save();
            // await adminRole.save()
            res.json(users);
        } catch(e) {
            next(e);
        }
    }
}

module.exports = new UserController();