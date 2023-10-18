const axios = require('axios');
const generateHeaders = require('../../utils/generateHeaders');
const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
const { expect } = require('chai');
const userTokenGenerator = require('../../utils/userTokenGenerate.utils');

describe('Get contact list test', () => {
    let token
    before('Should login and get the bearer token',async() => {
       token = await userTokenGenerator()

    });

    it('Should get the list of contacts', async() => {
        try {
            const response = await axios.get(`${baseUrl}/contacts`,generateHeaders(token))
            expect(response.status).to.equal(200)
        } catch (error) {
            console.log(error.response);
            
        }
    });
});