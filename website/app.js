/* Global Variables */
const apiKey = 'f789964ce313e0fe983d1bf7425ea542&units=imperial';
const generateBtn = document.getElementById('generate')
const input = document.getElementById('zip')
const textArea = document.getElementById('feelings')
let temp = 0
const local = 'http://localhost:8000'
const production = 'https://weather-app-mo.herokuapp.com'

window.process = {
  env: {
      NODE_ENV: 'development'
  }
}

const server = process.env.NODE_ENV == 'development' ? local : production
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 +'.'+ d.getDate()+'.'+ d.getFullYear();

// create reusable get method
const getMethod = async (paseUrl) => {
  return res = await fetch(paseUrl)
}


const postMethod =  async (paseUrl) => {
  const res = await fetch(paseUrl, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({date: newDate, feel: textArea.value , temp : temp }),
  })
  try {
    const data = await res.json()
    console.log(data)
    return data
  } catch {
    console.log("error")
  }
}

// function to get all data
const retrieveData = async () =>{
  fetch(`${server}/all`)
  .then(res => res.json())
  .then(data => {
    const allData = data;
    console.log(allData)
    // Write updated data to DOM elements
    document.getElementById('temp').innerHTML = 'Degree: ' + Math.round(allData.temp)+ ' degrees';
    document.getElementById('content').innerHTML = "Feelings : " + allData.feel;
    document.getElementById("date").innerHTML = 'Today Date: ' + allData.date;
  })
  .catch(err => console.log(err))
 }

 // handle button click function
generateBtn.addEventListener('click', (e) => {
  //prevent default action
  e.preventDefault()

  // get the data from openweathererb
  getMethod(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`)
  .then(res => res.json())
  .then(data => {
    temp = data.main.temp
    
    //call the post method that will send the data to the server
    postMethod(`${server}/postData`)

    // call the get method that will bring the opject from the server
    retrieveData()
  })
  .catch(err => console.log(err.message))
})
