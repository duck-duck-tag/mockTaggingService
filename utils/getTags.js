const tags = [

    
            { 'name': 'mountain', 'confidence': 0.99 },
            { 'name': 'lake', 'confidence': 0.7238 },
            { 'name': 'ice', 'confidence': 0.98238 },
            { 'name': 'snow', 'confidence': 0.98487 },
            { 'name': 'sky', 'confidence': 0.99 },
            { 'name': 'winter', 'confidence': 0.9711 },
            { 'name': 'forest', 'confidence': 0.68238 },
            { 'name': 'white', 'confidence': 0.9999 },
            { 'name': 'nothing', 'confidence': 0.1 },
            
        ]


const getTags = () => {

    
  
    return tags.map(tag => ({ ...tag, confidence: Math.random()  })).filter(tag => tag.confidence > Math.random()) // Tag confidence is its probability to be included
}


module.exports = getTags