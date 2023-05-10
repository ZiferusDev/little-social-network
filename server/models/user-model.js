const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    email:          {type: String, unique: true, required: true},
    password:       {type: String, unique: false, required: true},
    name:           {type: String, unique: false, required: false}, //Должно быть required
    surname:        {type: String, unique: false, required: false}, //Должно быть required
    avatar:         {type: String, unique: false, required: false, default: "какая-то пикча"},
    city:           {type: String, unique: false, required: false, default: "Не указано"},
    education:      {type: String, unique: false, required: false, default: "Не указано"},
    dateOfBirth:    {type: Date, unique: false, required: false}, //Должно быть required
    // friends:        [{type: Schema.Types.ObjectId, ref:"User"}],
    // posts:          [{type: ObjectId, ref:""}],
    // roles:          [{type: String, ref: 'Role'}]
})

module.exports = model('User', UserSchema);