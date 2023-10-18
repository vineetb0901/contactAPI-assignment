const axios = require('axios');
const { expect } = require('chai');
const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com'
const existingUserData = require('../../data/existingUser.json');
const getNewUserData = require('../../utils/getNewUser.utils');


describe('Add user test', () => {
    let token;
    it('Negative Test: Attempt to add user with existing user', async () => {
        try {
            await axios.post(`${baseUrl}/users/`,existingUserData.payload);

        } catch (error) {
            expect(error.response.data.message).to.equal(existingUserData.message)
            expect(error.response.status).to.equal(400); 
        }
    });

    it('Should successfully add user and get token', async () => {
        try {
            const response = await axios.post(`${baseUrl}/users/`, getNewUserData());
            token = response.data.token;
            expect(response.status).to.equal(201);
            expect(response.data).to.have.property('token');
        } catch (error) {
            console.error('Failed to add user:', error.response ? error.response.data : error.message);
            throw error;
        }
    });

});