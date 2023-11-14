const axios = require('axios');
const { expect } = require('chai');
const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
const generateHeaders = require('../../utils/generateHeaders');
const createNewUserToken = require('../../utils/createNewUserToken.utils');

describe('Get user profile test', () => {
    let token
    let userProfile
    before('Should create user and generate token',async() => {
        const response = await createNewUserToken()
        userProfile = response.data.user        
        token = response.data.token
    });
    
    it('Should get user profile', async() => {
        try {
            const response = await axios.get(`${baseUrl}/users/me`,generateHeaders(token))
            expect(response.status).to.equal(200)
            expect(response.data.firstName).to.equal(userProfile.firstName)
            expect(response.data.email).to.equal(userProfile.email)
            
        } catch (error) {
            console.log(error);     
        }
    });

});