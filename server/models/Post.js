const {Schema, model} = require('mongoose');

const Role = new Schema({
    date: {type: Date},
    description: {type: String},
    picture: {type: String},
})

module.exports = model('Post', Post);