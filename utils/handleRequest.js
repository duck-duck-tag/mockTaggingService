const getResponseForService = require('./getResponseForService')

let NUMBEROFREQUESTS = 0

const handleRequest = (request, response) => {


    const service = request.params.service


    NUMBEROFREQUESTS = NUMBEROFREQUESTS  +1 

    console.log( NUMBEROFREQUESTS + '. Requested data for ' + service + ' with path ' + request.path ) 


    const serviceTags = getResponseForService(service)

    const wait = Math.random() * 4000 // Delay response between 0-4 secs at random
    
    

    setTimeout(() =>     response.send( JSON.stringify(serviceTags)  ), wait)
}

module.exports = handleRequest