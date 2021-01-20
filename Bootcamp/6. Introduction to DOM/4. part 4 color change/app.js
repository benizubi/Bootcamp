const btn = document.querySelector('button');
const txt = document.querySelector('h1');

btn.addEventListener('click', () => {
    const rondo = randomColor()
    document.body.style.backgroundColor = rondo;
    // document.body allows us to access the body element directly 
    txt.innerText = rondo;

})


const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}