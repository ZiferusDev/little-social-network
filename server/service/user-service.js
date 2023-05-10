const UserModel = require("../models/user-model");
const bcrypt = require('bcryptjs');
const tokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");
const { refresh } = require("../controllers/user-controller");
const tokenModel = require("../models/token-model");

class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne( {email} );
            if (candidate) {
                throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`);
            }
            const hashPassword = await bcrypt.hash(password, 3);
            const user = await UserModel.create({email, password: hashPassword});

            const userDto = new UserDto(user); // id, mail
            const tokens = tokenService.generateTokens({...userDto});
            await tokenService.saveToken(userDto.id, tokens.refreshToken);
            
            return { ...tokens, user: userDto }
    }

    async login(email,password) {
        const user = await UserModel.findOne( {email} );
        if(!user) {
            throw ApiError.BadRequest(`Пользователь с email ${email} не был найден`);
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if(!isPassEquals) {
            throw ApiError.BadRequest(`Неверный пароль`);
        }
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return { ...tokens, user: userDto }
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token
    }

    async refresh(refreshToken) {
        if(!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if(!userData || !tokenFromDb) {
            throw new ApiError.UnauthorizedError();
        }
        const user = await UserModel.findById(userData.id);
        const userDto = new UserDto(user); // Дублируется, стоит вынести в отдельную ф-цию
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return { ...tokens, user: userDto }
    }
}

module.exports = new UserService(); 