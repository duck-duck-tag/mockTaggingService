const express = require('express')
const app = express()


const handleRequest = require('./utils/handleRequest')


var environment = process.env.NODE_ENV



app.get('/tag/:service*', handleRequest)
app.post('/tag/:service*', handleRequest)



const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(environment)
})