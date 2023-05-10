
module.exports = class UserDto { // DTO - data transfer object
    email;
    id;
    name;
    surname;
    avatar;
    city;
    education;
    dateOfBirth;    

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        // this.name = model.name;
        // this.surname = model.surname;
        // this.avatar = model.avatar;
        // this.city = model.city;
        // this.education = model.education;
        // this.dateOfBirth = model.dateOfBirth;
    }
}