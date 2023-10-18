const axios = require('axios');
const getUpdatedUserData = require('../../utils/updateUser.utils');
const { expect } = require('chai');
const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com'
const generateHeaders = require('../../utils/generateHeaders');
const getNewUserData = require('../../utils/getNewUser.utils');
const createNewUserToken = require('../../utils/createNewUserToken.utils');

describe('Update User test', () => {
    let token
    before('Should create user and generate token',async() => { 
        const response = await createNewUserToken()
        token = response.data.token
    });
    
    it('Should update user successfully', async() => {
        try {
            const updatedData = getUpdatedUserData()
            const response = await axios.patch(`${baseUrl}/users/me`,updatedData,generateHeaders(token));
    
            expect(response.data.firstName).to.equal(updatedData.firstName)
            expect(response.data.lastName).to.equal(updatedData.lastName)
            expect(response.data.email).to.equal(updatedData.email)
        } catch (error) {
            console.error(error);
        }
    });

});