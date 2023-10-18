function generateHeaders(token) {
    return {
        headers:{
            'Authorization':`Bearer ${token}`
        }
    }
}
module.exports = generateHeaders