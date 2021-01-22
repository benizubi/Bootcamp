const input = document.querySelector('input');
const h1 = document.querySelector('h1');
// changes //
// input.addEventListener('change', (e) => {
//     console.log("Input Event")
// })
// the change input only works when you're leaving the input and once u type something and it registers, the change
// you will have to change the value as what's already registered wont count as changed. 

// input//
// so here  whenever the input value changes, we're going to take that value from that input and update the h1 innter text to return that value 
input.addEventListener('input', () => {
    // h1.innerText = input.value;
    let a = "";
    if (input.value === a) {
        h1.innerText = "Enter Your Username";
    } else {
        h1.innerText = `Welcome, ${input.value}`;
    }
})
