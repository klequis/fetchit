
let url = 'http://api.openweathermap.org/data/2.5/weather?q=dublin,us&units=metric&APPID=cd605b9a7b8b517b82492ee7bf47a295'

fetchTheData()

function fetchTheData() {
  return fetch(url)
    .then(function(response) {
      console.log('first', response)
      return response.json()

    })
    .then(function(json) {
      console.log('fetched', json)
    })
    .catch(function(err) {
      console.log(err01)
    })
}
