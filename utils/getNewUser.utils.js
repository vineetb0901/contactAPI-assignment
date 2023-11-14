const faker = require('@faker-js/faker').faker;

function getNewUserData(){
    firstName = faker.person.firstName();
    lastName = faker.person.lastName();
    email = `${this.firstName.toLowerCase()}.${this.lastName.toLowerCase()}@pinkman.com`;
    password = faker.internet.password();

    return {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
    };
}
module.exports = getNewUserData