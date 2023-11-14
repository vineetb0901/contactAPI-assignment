const axios = require('axios');
const getNewUserData = require('./getNewUser.utils');
const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com'

async function createNewUserToken() {
    try {
        const response = await axios.post(`${baseUrl}/users`, getNewUserData());
        return response
    } catch (error) {
        console.log(error.response);
        
    }
}
module.exports = createNewUserToken