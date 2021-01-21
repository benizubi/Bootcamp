const btn = document.querySelector('#changeColor');
const container = document.querySelector('#container');

btn.addEventListener('click', (e) => {
    container.style.backgroundColor = makeRandColor();
    e.stopPropagation();
    // stop propagations basically stops the button from dissapearing whhen we click on it
})
// if clicked here, change the background to random rgb colors

container.addEventListener('click', () => {
    container.classList.toggle('hide');
    // so we've set it so that whenver someone makes  clicks on the div container, it will hide everything. however this hide all content so make sure to set it to


})
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}