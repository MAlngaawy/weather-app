//With this code, we’ll only load the .env file if the server isn’t already in production mode.
console.log('No value for FOO yet:', process.env.FOO);

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

console.log('Now the value for FOO is:', process.env.FOO);
// Setup empty JS object to act as endpoint for all routes
projectData = {}

// Require Express to run server and routes
const express = require('express')
const bodyParser = require('body-parser')
// Start up an instance of app
const app = express()

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors())

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
//set app the post
const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log("It's work")
})


// Return Endpoint Data
app.get('/getData', (req, res) => {
  res.send(projectData)
})


// Return Endpoint Data
app.post('/postData', (req, res) => {
  projectData = req.body
  res.send(projectData)
})

// get all data route
app.get('/all', (req, res) => {
  res.send(projectData)
})
