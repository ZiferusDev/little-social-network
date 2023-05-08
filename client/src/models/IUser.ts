export default interface IUser {
    email: string,
    password: string,
    name: string,
    surname: string,
    city?: string,
    education?: string,
    dateOfBirth: Date,
}