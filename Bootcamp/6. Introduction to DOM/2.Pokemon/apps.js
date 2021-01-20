
const container = document.querySelector('#container');
const baseUrl = 'https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/'


for (i = 1; i <= 151; i++) {
    const pokemonN = document.createElement('div');
    const label = document.createElement('span');
    // here we created a div and span 
    pokemonN.classList.add('pokemon')
    // classlist create a class of pokemon here
    label.innerText = `#${i}`;
    // we've set the text content to be numbers to watch each item
    const newImg = document.createElement('img');
    // the i symbol above here allows us to count each element add the numbers for each element
    newImg.src = `${baseUrl}${i}.png`
    // so here we're adding each url ending so that the number changes to display all images.
    pokemonN.appendChild(newImg)
    pokemonN.appendChild(label)
    container.appendChild(pokemonN)
}
