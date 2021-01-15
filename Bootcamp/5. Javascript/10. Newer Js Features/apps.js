// Deffault parameter 
// function rollDie(numsides) {
//     if (numsides === undefined) {
//         numsides = 6;
//     }

//     return Math.floor(Math.random() * numsides) + 1
// }
// so here the old way of doing things woul be to do if  numside is nan or undefined, then return random number by 6 else return random 

function rollDie(numsides = 6) {
    return Math.floor(Math.random() * numsides) + 1
}
// the code above is the same as the code commeted before that, this the newer nicer looking way of doing things

// another example //
function multiple(a, b = 1) {
    return a * b;
}
// we add a equal sign directly to our list in our parameters, a has no default value.
// mulitple(4); // 4
// multiple(4,5) //20

// function greet(mg = "hey there", person) { should always have the default parameter first, so it makes sense to switch it around
function greet(person, mg = "hey there") {
    console.log(`${mg}, ${person}!`)
}

// spread in functions calls //
// allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected,
//  or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
// in short, it 
// ... basically just allows you to spread the arguments by passing the arguments as seperate characters 

// Spread with Array litterals..
// create a new array using an exiitng array. spread the lement from one array into a new array
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];
// doesnt just workk arrays even a string so [..."hello"] but this line would spread each character into seperate character in the array
const allPets = [...cats, ...dogs]
// you can also combine arrays by doing this
// the ... in array allows you to copy, so here we have a new array with the same elements as cats

// spread in object literals /
// Copies  properties from one object into another object litteral

const feline = { legs: 4, family: 'Felidae' };
// to copy  youll have to 
{...feline }
// to add more things into it you'll need to 
{...feline, color: 'balck' }
// so that will add color into the new properties like color
const caninee = { isFury: true, family: 'Caninae' };
const canine = { isFury: true, family: 'Caninae' };

// so this code here is going to copy both objects and combine it into one and the order does matter, it will store it into a different array.
const catDog = { ...feline, ...canine }

// The Arguments Object //
// its available inside every function. 
// It's an array like object and has a length property, does not have array methods like push/pop
// contains all the arguments passed to the function. Not available inside of arrow functions!!

// function sum(...nums) {
//     return nums.reduce((total, el) => total + el)
//     // once you use the ... it collects all the arguments and doesnt just ignore the rest and it stores in in an actually array
//     // The Rest parameters ... collects all remaining arguments and place into an actually array
//     // only thing is that you can use array methods
// }
function raceResults(gold, silver, ...everyoneelse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANK TO EVERYONE ELSE: ${everyoneelse}`)
    // so what we did here we call the first argument first, then the second one and because everyone else has used ... it everything else that's not been listed 
}

// Destructuring Arrays//

const scores = [342344, 4344, 34233, 234234, 332434, 33434, 3433343, 23244342, 2424234];

// const highScore = scores[0];
// const secondHigherScore = scores[1]; this is the older longer way of doing things though. 

const [gold, silver, bronze] = scores;
// so above here is how to manipulate the array variables by setting our own, althought it doesn't actually change the array,
// The order of which you're doing things does matter 
// so the first argument in the array will become, gold, then second silver and then bronze and so on 

// Destructuring Objects //
// here the order doesn't matter like in arrays, but the key names does matter  when calling to change them.
const user = {
    email: 'bzk1995@hotmail.com',
    password: 'sCoTtgdfgdg',
    firstName: 'Bni',
    score: 80
}
const { email, password, firstName } = user;
// this just allways to single them out into their own variables

const { firstName: Exaucee, password: Kaskiki, died = 'N/A' } = user;
// so this will going to change the first name and password in the object by changing the key names

// so if i wanted to add into the object, u will need to use the = however the = only works if there's no value found for it, but if i tried using = to email, it will not return the name set because theres already a value for email 

// Destructuring Params //
// function fullName(user) {
//     const {firstName, email} = user;
//     return `${email} ${firstName}`
// } so instead of destructuring this allowing us to access first name and email
// instead you can do
function fullName({ firstName, email = 'makaku' }) {
    // here the = can always be useed to set diffult value if we cant find one.
    return `${firstName} ${email}`
}
// same can be done when working with arrays so example filtering here would be this instead
const users = [
    {
        firstName: 'Beni',
        LastName: 'Zubi',
        birthday: 1996

    },
    {
        firstName: 'Exaucee',
        LastName: 'Zubi',
        birthday: 2004
    }
]
// users.filter((user) => user.firstName.length > 10)
// // so this will filter the array and return the filter solution
// users.map(users => {
//     return `${users.firstName} (${users.LastName} was born in ${users.birthday})`
//     // here maps will also work to print out to print all users details
// })
users.map(({ firstName, LastName, birthday }) => {
    return `${firstName}, ${LastName} in ${birthday}`
});
// so the code above is the destructed reversion of the commented out map code. bothh works same way
