const characters = document.getElementById("characters")
const moons = document.getElementById("moons")
const planets = document.getElementById("planets")
const ships = document.getElementById("ships")

createCharacters()
fillTable()
google.charts.load('current', {'packages': ['corechart']})
google.charts.setOnLoadCallback(drawChart)

async function drawChart() {
    const response = await swapiGet("vehicles/")
    const vehiclesArray = response.data.results

    const dataArray = []
    dataArray.push(["Veículos", "Passageiros"])
    vehiclesArray.forEach((vehicle) => {
        dataArray.push([vehicle.name, Number(vehicle.passengers)])
    })

    var data = google.visualization.arrayToDataTable(dataArray)

    var options = {
      title: 'Veículos e Passageiros'
    }

    var chart = new google.visualization.PieChart(document.getElementById('piechart'))

    chart.draw(data, options)
}

function createCharacters() {
    Promise.all([swapiGet("people/"), swapiGet("vehicles/"), swapiGet("planets/"), swapiGet("starships")])
    .then(function (results) {
        characters.innerHTML = results[0].data.count
        moons.innerHTML = results[1].data.count
        planets.innerHTML = results[2].data.count
        ships.innerHTML = results[3].data.count
    })
}

async function fillTable() {
    const response = await swapiGet("films/")
    const tableData = response.data.results
    tableData.forEach(function(film) {
        $('#filmsTable').append(`<tr>
        <td>${film.title}</td>
        <td>${moment(film.release_date).format("DD/MM/YYYY")}</td>
        <td>${film.director}</td>
        <td>${film.episode_id}</td>
        </tr>`)
    })
}

function swapiGet(param) {
   return axios.get(`https://swapi.dev/api/${param}`)
}