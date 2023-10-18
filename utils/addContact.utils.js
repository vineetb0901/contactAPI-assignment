const faker = require('@faker-js/faker').faker;

function addContact () {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const birthdate = "2001-01-09"
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@pinkman.com`
    const phone = "9008127805"
    const street1 = "1 Main St."
    const street2 = "Apartment A"
    const city= "Anytown"
    const stateProvince = "KS"
    const postalCode = "12345"
    const country = "USA"

    return {
        firstName : firstName,
        lastName : lastName,
        birthdate : birthdate,
        email : email,
        phone : phone,
        street1 : street1,
        street2 : street2,
        city : city,
        stateProvince : stateProvince,
        postalCode : postalCode,
        country : country

    };
}
module.exports = addContact