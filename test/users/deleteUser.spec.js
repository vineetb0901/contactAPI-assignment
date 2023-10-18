const axios = require('axios');
const { expect } = require('chai');
const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com'
const generateHeaders = require('../../utils/generateHeaders');
const createNewUserToken = require('../../utils/createNewUserToken.utils');

describe('Delete User test', () => {
    let token
    before('Should create user and generate token',async() => { 
        const response = await createNewUserToken()
        token = response.data.token
    });
    
    it('Should be able to delete user', async() => {
        try {
            const response = await axios.delete(`${baseUrl}/users/me`,generateHeaders(token))
            expect(response.status).to.equal(200);
            
        } catch (error) {
            console.log(error.response);

        }     
    });

    it('Attempt to delete the non existing user', async()=>{
        try {
            await axios.delete(`${baseUrl}/users/me`,generateHeaders(token))
        } catch (error) {
            expect(error.response.data.error).to.equal('Please authenticate.');
            
        }
    })

});