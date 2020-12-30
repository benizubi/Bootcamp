// Console.log is used to print out messages to the console system, not the users.
// Practising with if statements

// let random = Math.random();
// if (random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5")
//     console.log(random);
// }

// if (random >= 0.5) {
//     console.log("YOUR NUMBER IS Greater THAN 0.5")
//     console.log(random);
// }
// const dayOfWeek = prompt().toLowerCase();
// // the lowercase has been set so it matches & prompt brings out an input field


// if (dayOfWeek === 'monday') {
//     console.log("UGH I hate Mondays")
// } else if (dayOfWeek === 'saturday') {
//     console.log("YAY I LOVE SATURDAYS!")
// } else if (dayOfWeek === 'friday') {
//     console.log("Fridays r okay, especially after work")
// } else {
//     console.log("MEH")
// }
// remember the else always check for anything else that's not already included in our if statement, will print only if not met any others before that line

// 0-5 - free
// 5-10 - child £10
// 10-65 - Adult £20
// 65+ Senior £10

// const age = 65;
// if (age < 5) {
//     console.log("You a baby, free entry 4 u")
// } else if (age < 10) {
//     console.log("You r a child, but its £10")
// } else if (age < 65) {
//     console.log("You are an adult. You pay £20")
// } else {
//     console.log("Do whatever you like")
// }
// // can have as many else if as you want.


const password = prompt("please enter a new password");

// the password must be 6+ characters: 
if (password.length >= 6) {
    // here below wenested both if statements together so to display the right log based on the issue ,
    //  the code below commented out would work but can only print 1 log at a time
    if (password.indexOf('') == -1) {
        // indexOf is used to check for what number is the characters and ' ' for spaces between charaters it's -1 
        // so to check for space we check for -1
        console.log("Valid password!")
    }else{
        console.log("Password cannot contain spaces!")
    } 
} else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters")

}
// password cannot include spaces:
// if (password.indexOf('') == -1) {
//     // indexOf is used to check for what number is the characters and ' ' for spaces between charaters it's -1 
//     // so to check for space we check for -1
//     console.log("Good Job! No space!")
// }else{
//     console.log("Password cannot contain spaces!")
// } 