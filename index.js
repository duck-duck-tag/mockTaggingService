const express = require('express')
const app = express()

const bodyParser = require('body-parser')

app.use(express.json()) 
app.use(bodyParser.urlencoded({ extended: true }))

const handleRequest = require('./utils/handleRequest')


var environment = process.env.NODE_ENV



app.get('/tag/:service*', handleRequest)
app.post('/tag/:service*', handleRequest)

// For developing API-requests
app.post('/pretendAPI/', (req,res) => {

  console.log('request headers', req.headers  )
  console.log('request body', req.body)

  res.send('Halleluja!')

})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(environment)
})