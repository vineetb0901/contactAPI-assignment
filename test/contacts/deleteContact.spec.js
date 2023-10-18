const axios = require('axios');
const { expect } = require('chai');
const generateHeaders = require('../../utils/generateHeaders');
const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com';
const addContact = require('../../utils/addContact.utils');
const getNewUserData = require('../../utils/getNewUser.utils');

describe('Delete contact test', () => {
    let token
    let contactId
    before('create a dummy user and add some contacts', async() => {
        try {
            const response = await axios.post(`${baseUrl}/users`, getNewUserData())
            token = response.data.token
            const res = await axios.post(`${baseUrl}/contacts`, addContact(), generateHeaders(token))
            contactId = res.data._id
        } catch (error) {
            console.log(error.response);
        }  
    });

    it('Attempt to delete with wrong contactId', async() => {
        try {
            await axios.delete(`${baseUrl}/contacts/wrongcontact`,generateHeaders(token))   
        } catch (error) {
            expect(error.response.data).to.equal('Invalid Contact ID')
            expect(error.response.status).to.equal(400)
        }   
    });

    it('Should be able to delete the particular contact', async() => {
        try {
            const response = await axios.delete(`${baseUrl}/contacts/${contactId}`,generateHeaders(token))
            expect(response.status).to.equal(200);
        } catch (error) {
            console.log(error.response);
        }
        
        
    })
});