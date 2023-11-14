const axios = require('axios');
const { expect } = require('chai');
const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com'
const loginData = require('../../data/loginData.json');

describe('Login User test', () => {

    it('Attempt login with wrong credentials', async() => {
        try {
            await axios.post(`${baseUrl}/users/login`,loginData.failedLogin.credentials);
        } catch (error) {
            expect(error.response.status).to.equal(loginData.failureResponse.status)
            expect(error.response.statusText).to.equal(loginData.failureResponse.statusText)
        }
    });


    it('Should be able to login', async () => {
        try {
            const response = await axios.post(`${baseUrl}/users/login`,loginData.successFull.credentials);

            expect(response.status).to.equal(loginData.successResponse.status)
            expect(response.data.user.firstName).to.equal(loginData.successFull.data.firstName)
            expect(response.data.user.email).to.equal(loginData.successFull.credentials.email)

        } catch (error) {
            console.error(error);
        }
    });
    
    

});