const getResponseForService = require('./getResponseForService')

let NUMBEROFREQUESTS = 0

const handleRequest = (request, response) => {


    const service = request.params.service


    NUMBEROFREQUESTS = NUMBEROFREQUESTS  +1 
    console.log(NUMBEROFREQUESTS + '. Requested data for '.concat(service))


    const serviceTags = getResponseForService(service)

    const wait = Math.random() * 4000 // Delay response between 0-4 secs at random
    
    

    setTimeout(() =>     response.send( serviceTags ? JSON.stringify(serviceTags)  : tags.default ), wait)
}

module.exports = handleRequest