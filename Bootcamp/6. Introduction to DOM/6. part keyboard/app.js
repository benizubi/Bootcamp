document.querySelector('button').addEventListener('click', (anything) => {
    // if you pass an argument in the function and log it, it will show u all mouseEvent or keys events
    console.log(anything);

})
// // keydown basically work when you press and hold the key down, dont matter the key
// const input = document.querySelector('input');
// input.addEventListener('keydown', (e) => {
//     console.log(e.key);
//     // the key is basically the end result so whatever i click like shift will be the key 
//     console.log(e.code);
//     // the code is basically which key you pressed e.g shiftRight location or position  of where the key is 
// })
// input.addEventListener('keyup', () => {
//     console.log("KEYUP");
// })
// here below we're basically setting only these keys to work when pressed and anything else will get ignored. Good for games
window.addEventListener('keydown', () => {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!")
            break;
        case 'ArrowDown':
            console.log("Down!")
            break;
        case 'ArrowLeft':
            console.log("Left!")
            break;
        case 'ArrowRight':
            console.log("Right!")
            break;
        default:
            console.log('Ignored!')
    }
})