const btn = document.querySelector('#btn')
const joke = document.querySelector('#joke')


const apiKey = 'GPEJ+y3r2JI+a7STHWDaQg==CpeWXjiTbLyZsFeL'

const options = {
    method: 'GET',
    headers: {
        'X-Api-Key':apiKey
    }
}

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'

async function getJoke(){
    
    try {
    joke.innerText = "Updating..."
    btn.disabled = true
    btn.innerText = 'Loading...'
    const response = await fetch(apiURL,options)
    const data = await response.json()
    
    btn.disabled = false
    btn.innerText = 'tell me a joke'
    
    joke.innerText = data[0].joke
    } catch (error) {
        joke.innerText = "Error Happened please try again later..." 
        btn.disabled = false
        btn.innerText = 'tell me a joke'
    }

    
}

btn.addEventListener('click',getJoke)