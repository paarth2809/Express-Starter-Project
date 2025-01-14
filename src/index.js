const express=require('express')
const bodyParser=require('body-parser')

const serverConfig = require('./config/serverConfig')
const connectDB = require('./config/dbConfig')

const app=express()

// we require deserializer based on different types of input formats

// logic to parse the data that is input in json form
app.use(bodyParser.json())
// if input body is in text
app.use(bodyParser.text())
// if input given in url-encoded in postman
app.use(bodyParser.urlencoded())

app.listen(serverConfig.PORT,async ()=>{
    await connectDB();
    console.log(`server started at port ${serverConfig.PORT}`)
})

