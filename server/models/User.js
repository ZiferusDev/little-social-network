const {Schema, model} = require('mongoose');

const User = new Schema({
    email:          {type: String, unique: true, required: true},
    password:       {type: String, unique: false, required: true},
    name:           {type: String, unique: false, required: true},
    surname:        {type: String, unique: false, required: true},
    photo:          {type: String, unique: false, required: false, default: "какая-то пикча"},
    city:           {type: String, unique: false, required: false, default: "Не указано"},
    education:      {type: String, unique: false, required: false, default: "Не указано"},
    dateOfBirth:    {type: Date, unique: false, required: true},
    friends:        {type: Array, unique: false, required: false, default: false},
    posts:          {type: Array, unique: false, required: false, default: false},
    roles:          [{type: String, ref: 'Role'}]
})

module.exports = model('User', User);