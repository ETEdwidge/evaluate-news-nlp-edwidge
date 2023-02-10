const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch');
var cors = require('cors');
var bodyParser = require('body-parser')
var requestPost = require('./PostRoute.js')

const app = express()

// Require the Aylien npm package
var aylien = require("aylien_textapi");

var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});


app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist')) 

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// Post for article analysis
app.post('/article', requestPost.validateR, requestPost.registerR);

module.exports = app;