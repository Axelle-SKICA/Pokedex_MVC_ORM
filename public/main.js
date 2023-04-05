
function addEventListener() {
    const buttonHtmlElmt = document.getElementById('random-pokemon-button');
    console.log(buttonHtmlElmt);
    buttonHtmlElmt.addEventListener("click", handleButtonClick);
}

function getRandomId(min, max) {
    return Math.round(Math.random()*(max-min)+min)
} 

async function handleButtonClick() {
    const randomId = getRandomId(1, 151);
    const httpResponse = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${randomId}/`);
    const result = await httpResponse.json();

    const divRandomPokemonElmt = document.getElementById('random-pokemon');
    divRandomPokemonElmt.style.display="flex";

    const randomPokemonImgElmt = document.getElementById('random-pokemon-image');
    randomPokemonImgElmt.setAttribute('src', `${result.image}`);
    randomPokemonImgElmt.setAttribute('alt', `${result.name}`);

    const randomPokemonPElmt = document.getElementById('random-pokemon-description');
    randomPokemonPElmt.textContent = `${result.name} - # ${result.id}`;

}

addEventListener();
