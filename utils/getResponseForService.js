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

    ,aws: {
       
        Labels: [
            // Tags are inserted here
        ]
        
    }

    ,google: {
       
        responses: [
            {
                labelAnnotations: [
                 // Tags are inserted here
                ]
            }
           
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

    if (service === 'aws') {

        let tags = getTags()  
        // mocks aws tag structure
        const getParents = () => getTags().map(t => ({ Name: t.name }))
        tags = tags.map(tag => ({ Name: tag.name,Confidence: tag.confidence, Parents: getParents() }))


        response.Labels = tags

    }

    if (service === 'azure') {
        response.tags = getTags() 
    }

    if (service === 'google') {
        
        let tags = getTags()  
        // mocks google tag structure
        tags = tags.map(tag => ({ description: tag.name,Confidence: tag.score }))

        response.responses[0].labelAnnotations = tags
    }

    if (!response) {
        response = {
            tags: getTags()
        }
    }

  
    return response


}

module.exports = getResponseForService