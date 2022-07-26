import { button } from './navbar.js'

table()

async function table(id) {
  const response = await swapiGet(`id/${id}.json`)
  const tableData = response.data

  tableData.forEach(function(people) {
      $('.charactersSection').append (
        `
        <div class="cardContainer">
          <div class='cardCharacter'>
            <h1>${people.name}</h1>
            <div class='imageContainer'>
              <img src='https://starwars-visualguide.com/assets/img/characters/${people.id}.jpg' alt='${people.name}'>
            </div>
            <div class='infoContainer'>
              <div class='infoAbout'>
                <h2 class='title'>About:</h2>
                <p>Height: ${people.height + ' m'}</p>
                <p>Mass: ${people.mass + ' kg'}</p>
                <p>Hair: ${people.hairColor}</p>
                <p>Skin: ${people.skinColor}</p>
                <p>Eye: ${people.eyeColor}</p>
                <p>Birth: ${people.born + 'BBY'} ${people.bornLocation}</p>
                <p>Died: ${people.died + 'BBY'} ${people.diedLocation}</p>
                <p>Gender: ${people.gender}</p>
              </div>
              <div class='affiliations'>  
                <h2 class='title'>Affiliations</h2>
                <p class='text'>${people.affiliations}</p>
              </div>
              <div class='masters'>  
                <h2 class='title'>masters</h2>
                <p class='text'>${people.masters}</p>
              </div>
              <div class='apprentices'>  
                <h2 class='title'>apprentices</h2>
                <p class='text'>${people.apprentices}</p>
              </div>  
              <div class='locations'>  
                <h2 class='title'>homeworld</h2>
                <p class='text'>${people.homeworld}</p>
              </div> 
            </div>
          </div>
        </div>
        `
      )
  })
}

function swapiGet() {
  return axios.get("https://akabab.github.io/starwars-api/api/all.json")
}