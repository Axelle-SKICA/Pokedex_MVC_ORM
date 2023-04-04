
function init() {
    const randomId = getRandomId(1, 151);
    addEventListener();
    handleButtonClick(randomId);
}

function getRandomId(min, max) {
    return Math.round(Math.random()*(max-min)+min)
}

function addEventListener(){
    document.getElementById('random-pokemon-button');
}

async function handleButtonClick(id) {
    const httpResponse = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}/`);
    const result = await httpResponse.json();

    const randomPokemonImgElmt = document.getElementById('random-pokemon-image');
    randomPokemonImgElmt.setAttribute('src', `${result.image}`);
    randomPokemonImgElmt.setAttribute('alt', `${result.name}`);

    const randomPokemonPElmt = document.getElementById('random-pokemon-description');
    randomPokemonPElmt.textContent = `${result.name} - # ${result.id}`;

}

init();
