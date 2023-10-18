const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com'
const axios = require('axios');
const loginData = require('../data/loginData.json');


async function userTokenGenerator() {
    try {
        const response = await axios.post(`${baseUrl}/users/login`, loginData.successFull.credentials);
        token = response.data.token;
        return token
    } catch (error) {
        console.log(error.response);        
    }
}
module.exports = userTokenGenerator