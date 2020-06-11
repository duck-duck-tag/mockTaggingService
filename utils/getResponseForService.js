const getTags = require('./getTags')

const services = {

    ibm: {
        images: [
            {},
            {
                classifiers: [
                    {
                        classes: [
                           // Tags are inserted here
                        ]
                    }
                ]
            }
        ]
    } 

       
    ,
    azure: {
        tags:[
           // Tags are inserted here
        ]
    }

}



const getResponseForService = service => {

    let response = services[service]

    if (service === 'ibm') {

        let tags = getTags()  
        // mocks ibm tag structure
        tags = tags.map(tag => ({ class: tag.name,score: tag.confidence }))
        // mocks response.data.images[1].classifiers[0].classes
        response.images[1].classifiers[0].classes = tags



    }

    if (service === 'azure') {
        response.tags = getTags() 
    }

    if (!response) {
        response = {
            tags: getTags()
        }
    }

  
    return response


}

module.exports = getResponseForService