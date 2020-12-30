const userInput = prompt("Enter Something");

if (userInput) {
    // because userinput is a string and qualify for being a truthy attribute
    // so we dont need to do if (userInput == true) and can just write like that instead because a string is automatically a truth factor already so can write like this instead resulting a boolean
    console.log("TRUTHY!")
} else {
    console.log("FALSY!")
}