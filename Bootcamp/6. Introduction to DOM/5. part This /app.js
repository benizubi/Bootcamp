const makeRandom = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}
// Tthe makernadom is the random color function we created to generate random colors
const btns = document.querySelectorAll('button');
for (let button of btns) {
    button.addEventListener('click', colorize);
}
const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('click', colorize);
}

function colorize() {

    this.style.backgroundColor = makeRandom();
        // here i chnaged the button style background color to generate a random color on click
    this.style.color = makeRandom();
        // this one changes the button text color
        // because we are using more or less the smae code format function to print background and text color
        // instead of doing it individually and invoking the button.style.color=.......
        // instead this works perfect and refers to the element being clicked on so we can just call back colorized function for each part.

}