/* Global Variables */
const apiKey = 'f789964ce313e0fe983d1bf7425ea542';
const generateBtn = document.getElementById('generate')
const input = document.getElementById('zip')


// create get method
const getMethod = async (paseUrl) => {
  const res = await fetch(paseUrl)

  try {
    const data = await res.json()
    console.log(data)
  } catch {
    console.error(error)
  }
}

generateBtn.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(input.value)
  getMethod(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`)
})


const postMethod =  async (paseUrl) => {
  const res = await fetch(paseUrl, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
   // Body data type must match "Content-Type" header        
    body: JSON.stringify({name: "One"}), 
  })

  try {
    const data = await res.json()
    console.log(data)
    return data
  } catch {
    console.log("error")
  }
}

postMethod("http://localhost:8000/postData")