table()

async function table() {
    const response = await swapiGet("people/")
    const tableData = response.data.results
    tableData.forEach(function(people) {
        $('#charactersSection').append (
            `
        <div class="cardContainer">
          <div class='cardCharacter'>
            <h1>${people.name}</h1>
            <div class='imageContainer'>
              <img src='https://starwars-visualguide.com/assets/img/characters/${people.url.replace(/\D/g,"")}.jpg' alt='${people.name}'>
            </div>
            <div class='infoContainer'>
              <h2>About:</h2>
              <div class='infoContent'>
                <h3>Name: ${people.name}</h3>
                <h3>Height: ${people.height/100 + 'm'}</h3>
                <h3>Mass: ${people.mass}</h3>
                <h3>Hair: ${people.hair_color}</h3>
                <h3>Skin: ${people.skin_color}</h3>
                <h3>Eye: ${people.eye_color}</h3>
                <h3>Birth: ${people.birth_year}</h3>
                <h3>Gender: ${people.gender}</h3>
              </div>
            </div>
          </div>
        </div>
        `)
    })
}

function swapiGet(param) {
    return axios.get(`https://swapi.dev/api/${param}`)
}