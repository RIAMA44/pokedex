//Récupère les datas de l'API
const apiData={
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '3',
}

const {url, type, id} = apiData
let apiUrl = `${url}${type}/${id}`
console.log(apiUrl)

//fetch (aller chercher)
fetch(apiUrl)
    .then( (data) => data.json() )
    .then( (pokemon) => generateHtml(pokemon) )

const generateHtml=(data) =>{
    console.log(data)
    //caractéristiques du pokemon
    const html=`
        <div id="pokemon"><img src=${data.sprites.front_default}></div>
        <div id="pokeName"><img src="img/icons8-pokéball-96-2.png"><h1>${data.name}</h1></div>
        
    `
    const pokemonDiv= document.querySelector('#container1')
    pokemonDiv.innerHTML=html

    const html2=`
    <div class="infos height"><h2>HEIGHT : ${data.height}</h2></div>
        <div class="infos weight"><h2>WEIGHT : ${data.weight}</h2></div>
        <div class="infos weight"><h2>ABILITIES : ${data.abilities[0].ability.name} and ${data.abilities[1].ability.name}</h2></div>
        <div class="infos type"><h2>TYPE : ${data.types[0].type.name}</h2></div>
    `
    const pokemonDiv2= document.querySelector('#container2')
    pokemonDiv2.innerHTML=html2
}

// Boutons d'incrément décrément
let selectId = apiData.id;
console.log(selectId)

function nextPokemon() {
    selectId++;
    document.getElementById('right').value=selectId;
    console.log(selectId)
    apiUrl = `${url}${type}/${selectId}`
    fetch(apiUrl)
    .then( (data) => data.json() )
    .then( (pokemon) => generateHtml(pokemon) )
}

document.getElementById("right").addEventListener("click", nextPokemon); 

function prevPokemon() {
    if (selectId>1){
    selectId--;
    document.getElementById('left').value=selectId;
    console.log(selectId)
    apiUrl = `${url}${type}/${selectId}`
    fetch(apiUrl)
    .then( (data) => data.json() )
    .then( (pokemon) => generateHtml(pokemon) )}
    }

document.getElementById("left").addEventListener("click", prevPokemon); 