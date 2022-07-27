import { button } from './navbar.js'

table()

async function table(id) {
  const response = await swapiGet(`id/${id}.json`)
  const tableData = response.data

  tableData.forEach(function(people) {
      $('.charactersSection').append (
        `
        <div class="cardContainer">
          <img src='https://starwars-visualguide.com/assets/img/characters/${people.id}.jpg' alt='${people.name}'>
            <div class='infoAbout'>
              <h1>${people.name||"without informations"}</h1>
              <h2 class='title'>about</h2>
              <p>Height: ${people.height||"without informations"}</p>
              <p>Mass: ${people.mass||"without informations"}</p>
              <p>Hair: ${people.hairColor||"without informations"}</p>
              <p>Skin: ${people.skinColor||"without informations"}</p>
              <p>Eye: ${people.eyeColor||"without informations"}</p>
              <p>Born: ${people.born||"without informations"}</p>
              <p>Died: ${people.died||"without informations"}</p>
              <p>Gender: ${people.gender||"without informations"}</p>
              <div class='masters'>  
                <h2 class='title'>masters</h2>
                <p class='text'>${people.masters||"without informations"}</p>
              </div>
              <div class='apprentices'>  
                <h2 class='title'>apprentices</h2>
                <p class='text'>${people.apprentices||"without informations"}</p>
              </div>  
              <div class='locations'>  
                <h2 class='title'>homeworld</h2>
                <p class='text'>${people.bornLocation||"without informations"}</p>
                <p class='text'> ${people.diedLocation||"without informations"}</p>
                <p class='text'>${people.homeworld||"without informations"}</p>
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