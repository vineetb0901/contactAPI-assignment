const faker = require('@faker-js/faker').faker;

function getUpdatedUserData() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@pinkman.com`;

    return {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: 'myPassword'
    };
}

module.exports = getUpdatedUserData