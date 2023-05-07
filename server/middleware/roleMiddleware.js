const jwt = require('jsonwebtoken');
const { secret } = require('../config')

// admin token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTY1NmQ2NmRjY2FhOTc2ODAyYTE4ZCIsInJvbGVzIjpbIlVTRVIiXSwiaWF0IjoxNjgzMzc5OTMzLCJleHAiOjE2ODM0NjYzMzN9.F-HrP-Nd0MojKjI0y_TEluDDMBdzzgiS64g7Zw9V0g4

module.exports = function (roles) {
    return function (req, res, next) {
        if(req.method === "OPTIONS") {
            next()
        }
    
        try {
            const token = req.headers.authorization.split(" ")[1];
            if(!token) {
                return res.status(400).json( {message: "Пользователь не авторизован"} )
            }
            const {roles: userRoles} = jwt.verify(token, secret)
            let hasRole = false
            userRoles.forEach(role => {
                if(roles.includes(role)) {
                    hasRole = true
                }
            })
            if (!hasRole) {
                return res.status(400).json({message: "У вас нет доступа"})
            }
            next()
        } catch(e) {
            console.log(e);
            return res.status(400).json( {message: "Пользователь не авторизован"} )
        }
    }
}