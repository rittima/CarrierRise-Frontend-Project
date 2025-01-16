const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

//available route
app.use('/api/auth',require('./routes/auth'))
app.use('/api/consultant',require('./routes/consultant'))
app.use('/api/schedule',require('./routes/schedule'))

app.listen(port, () => { 
  console.log(`Example app listening on port at http://localhost:${port}`)
})