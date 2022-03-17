//import fetch from "node-fetch";
let input = document.getElementById('submitCity').addEventListener('click', displayTemp)


fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=fc9fb32659d39095a4bd6dd459908cfa`)
    .then(function (response) {
        return response.json()
    }).then(function (json) {
        celToFahren(json)

    console.log('yeet', json)
    console.log((typeof json.main.temp))
    })


function celToFahren(json) {
    json.main.temp = Number((json.main.temp * 9/5 +32).toFixed(1))
    json.main.temp_max = Number((json.main.temp_max * 9/5 + 32).toFixed(1))
    json.main.temp_min = Number((json.main.temp_min * 9/5 + 32).toFixed(1))
    json.main.feels_like = Number((json.main.feels_like * 9/5 + 32).toFixed(1))
}

function displayTemp () {
    let city = document.getElementById('city').value
    console.log(city)
}