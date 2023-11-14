const axios = require('axios');
const { expect } = require('chai');
const generateHeaders = require('../../utils/generateHeaders');
const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
const sampleContact = require('../../data/sampleContact.json')
const updateContact = require('../../data/updateContactData.json');
const userTokenGenerator = require('../../utils/userTokenGenerate.utils');

describe('Update contact using put', () => {
    let token
    before('Should login and get the bearer token',async() => {
        token = await userTokenGenerator()

    });

    it('Should update the particular contact', async() => {
        try {
            const response = await axios.put(`${baseUrl}/contacts/${sampleContact._id}`,updateContact,
            generateHeaders(token))
    
            expect(response.status).to.equal(200)
            expect(response.data.firstName).to.equal(updateContact.firstName)
            expect(response.data.city).to.equal(updateContact.city) 
        } catch (error) {
            console.log(error.response);    
        }
        
    });
});