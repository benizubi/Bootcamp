const btn = document.querySelector('#v2');
btn.onclick = function () {
    console.log('u clicked me')
    console.log('hope it works haha')
}
// can do the onlick either like one these options long as you place it on the function.
function screem() {
    console.log('haaha')
    console.log('stop haaha now')
}
btn.onmouseenter = screem;

// you can't just pass on the onclick element that with the = and code, you have to place it as a function so the action only happens once click. always use function!
document.querySelector('hi').onclick = () => {
    alert('you clicked the h1!')
}

// this one is the best option to use for the onclick by adding EventListener and once an action happens like here 'mouse scrolled, then function will run
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', () => {
    alert('Clicked')
})
function twist() {
    console.log('haha catch me outside')
}
const tasB = document.querySelector('#tas');
// tasB.onclick = twist;
// tasB.onclick = screem;
// you cannot run the on method on more than one element so the two codes above will not work, only one does
// whereas if i use eventListener, you can back multiple call backs without interferance
tasB.addEventListener('click', screem, { once: true })
// the once object runs only once, then it dissapear, or stops running again, whereas if not set, you can run as many times as u wish like the code below
tasB.addEventListener('click', twist)