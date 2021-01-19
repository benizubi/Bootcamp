// const images = document.getElementsByTagName('img')

// for(let img of images){
//     console.log(img.src)
// }
const allLinks = document.querySelectorAll('a');

// for(let link of allLinks){
//     link.innerText= ' I am a link'
//     // by doing this we are overriding what's been set through the HTML
// }

// for(let links of allLinks){
//     links.style.color = 'grb(0,108,134)';
// allLinks.style.textDecorationColor ='blue';
// allLinks.style.textDecorationStyle ='unerlined';

// } changed here all links color


// document.querySelectorAll('span')[0].style.color = colors[0];
// document.querySelectorAll('span')[1].style.color = colors[1];
// document.querySelectorAll('span')[2].style.color = colors[2];
// document.querySelectorAll('span')[3].style.color = colors[3];
// document.querySelectorAll('span')[4].style.color = colors[4];
// document.querySelectorAll('span')[5].style.color = colors[5];
// document.querySelectorAll('span')[6].style.color = colors[6];
// h2.classList.add('border')


// const a = document.querySelectorAll('.highlight')[0];
// a.classList.toggle('highlight');
// const b = document.querySelectorAll('.highlight')[0];
// b.classList.toggle('highlight');

// const c = document.querySelectorAll('li')[3];
// c.classList.add('highlight');
// const d = document.querySelectorAll('li')[5];
// d.classList.add('highlight');

// const e = document.querySelectorAll('li')[2];
// e.classList.add('highlight');


for(let i=0; i<100; i++){
    const newB = document.createElement('button');
    newB.innerText = 'Hey!';
    const collector = document.body.appendChild(newB);

    const divi = document.querySelector('div');
    divi.appendChild(newB)
}