table()

async function table() {
    const response = await swapiGet("people/")
    const tableData = response.data.results
    tableData.forEach(function(people) {
        $('#filmsTable').append(
            `<tr>
                <td>${people.name}</td>
                <td>${people.height/100 + 'm'}</td>
                <td>${people.mass}</td>
                <td>${people.hair_color}</td>
                <td>${people.skin_color}</td>
                <td>${people.eye_color}</td>
                <td>${people.birth_year}</td>
                <td>${people.gender}</td>
            </tr>`
        )
    })
}

function swapiGet(param) {
    return axios.get(`https://swapi.dev/api/${param}`)
}