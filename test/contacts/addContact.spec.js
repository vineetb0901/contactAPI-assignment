const axios = require('axios');
const { expect } = require('chai');
const addContact = require('../../utils/addContact.utils');
const generateHeaders = require('../../utils/generateHeaders');
const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com'
const userTokenGenerator = require('../../utils/userTokenGenerate.utils');


describe('Contacts api tests', () => {
    let token
    before('Should login and get the bearer token',async() => {
        token = await userTokenGenerator()
        
    });

    it('Should Add contacts', async() => {
       try {
        const newContactData = addContact()    
        const response= await axios.post(`${baseUrl}/contacts`,newContactData,generateHeaders(token))
        expect(response.status).to.equal(201)
       } catch (error) {
        console.error(error);
       } 
    });
});