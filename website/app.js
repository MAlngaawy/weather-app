/* Global Variables */
const apiKey = 'f789964ce313e0fe983d1bf7425ea542&units=imperial';
const generateBtn = document.getElementById('generate')
const input = document.getElementById('zip')
const textArea = document.getElementById('feelings')
let temp = 0
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// create reused get method
const getMethod = async (paseUrl) => {
  return res = await fetch(paseUrl)
}


// function to get the data from the app endpoint
// getMethod(`https://api.openweathermap.org/data/2.5/weather?q=qina&appid=${apiKey}`)
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))

// get function that get the endpoint projectData
getMethod(`http://localhost:8000/getData`)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))


const postMethod =  async (paseUrl) => {
  const res = await fetch(paseUrl, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({date: newDate, feelings: textArea.value , temp : temp }),
  })
  try {
    const data = await res.json()
    console.log(data)
    return data
  } catch {
    console.log("error")
  }
}


generateBtn.addEventListener('click', (e) => {
  e.preventDefault()
  getMethod(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`)
  .then(res => res.json())
  .then(data => {
    temp = data.main.temp
    console.log(temp)
    postMethod("http://localhost:8000/postData")
  })
  .catch(err => console.log(err.message))
})
