//import fetch from "node-fetch";





function celToFahren(json) {
    json.main.temp = Number((json.main.temp * 9/5 +32).toFixed(1))
    json.main.temp_max = Number((json.main.temp_max * 9/5 + 32).toFixed(1))
    json.main.temp_min = Number((json.main.temp_min * 9/5 + 32).toFixed(1))
    json.main.feels_like = Number((json.main.feels_like * 9/5 + 32).toFixed(1))
}

function displayTemp () {
    let userInput = document.getElementById('city').value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=metric&appid=fc9fb32659d39095a4bd6dd459908cfa`)
        .then(function (response) {
            return response.json()
        }).then(function (json) {
        celToFahren(json)

        console.log('yeet', json)
        console.log((typeof json.main.temp))
    })
}