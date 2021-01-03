// const userInput = prompt("Enter Something");
// 
// if (userInput) {
//     // because userinput is a string and qualify for being a truthy attribute
//     // so we dont need to do if (userInput == true) and can just write like that instead because a string is automatically a truth factor already so can write like this instead resulting a boolean
//     console.log("TRUTHY!")
// } else {
//     console.log("FALSY!")
// }
// 
// logical AND = &&
// const password = prompt("Enter your password");
// 
// if (password.length >= 6 && password.indexOf('') == -1) {
//     // Both of the code above has to be true in order for the first if to be executed.  will never excute the code if one part is false
//     // the if checking for not less than 6 characters and also has no spaces as the spaces charater number is -1
//     console.log("VLIAD PASSWORD!")
// } else {
//     console.log("INCORRECT FORMAT FOR PASSWORD!")
// }
// 
// 
// Logical OR = ||
// 
// 0-5 free
// 5-10 $10
// 10-65 £20
// 65+ free
// const age = 10;
// if (age >= 0 && age < 5 || age >= 65) {
//     console.log("FREE");
// } else if (age >= 5 && age < 10) {
//     console.log("£10")
// } else if (age >= 10 && age < 65) {
//     console.log("£20")
// } else {
//     console.log("INVALID AGE!")
// }
// 
// Logic Not = !
const age = 8;

if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("YOU ARE NOT A BABY OR A SENIOR!")
}
