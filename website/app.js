/* Global Variables */
const apiKey = 'f789964ce313e0fe983d1bf7425ea542&units=imperial';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// const getMethod = async (paseUrl) => {
//   const res = await fetch(paseUrl)

//   try {
//     const data = await res.json()
//     console.log(data)
//   } catch {
//     console.error(error)
//   }
// }

// getMethod('http://localhost:8000/getData')

const postMethod =  async (paseUrl) => {
  const res = await fetch(paseUrl, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
   // Body data type must match "Content-Type" header        
    body: JSON.stringify({name: "Two"}), 
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