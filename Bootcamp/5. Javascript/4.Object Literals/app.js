// Object Literals 
// These are collections of a set of the same thing so like username would be one, and these below are the key names reference
// Also you can store any type of data in a object like listed below as they all get turned into a strings

const kitchenSink = {
    favNum: 929292,
    isFunny: true,
    colors: ['red', 'orange']
}
// To create object we use { }, but to access them, one option we need [] to access them or use the . like below
kitchenSink["favNum"]
// we can access the object key like this using "" to match the key we looking for or
kitchenSink.favNum
// we can just access it by calling the object variable and then . the keyword variable
//  every key we used in a object like favNum, gets converted into a string 

// also you can access the key using this format
kitchenSink['fav' + 'Num']
// its better to use [] when accessing the data as you can even access different ojbect using the [] wheras using .something won't acess object to object
// Also you'll have to create new variables then connect it to find match for each key if you wanted to create a string that returns selected items in the object e.g
let favNum = kitchenSink[favNum]
let colors = kitchenSink[colors]
const theSelected = favNum + colors;
kitchenSink[theSelected]

// Modifying Objects
// You can change the value of what's stored in each key by first accessing the key then changing it e.g
kitchenSink.isFunny = false;
kitchenSink['isFunny'] = false;
// that's just to change the existed values, but you can also actually create new keys that didnt exist like any of the below lines.
kitchenSink.favFood = 'fish';
kitchenSink['favFoodis'] = 'fishing';



// Nesting Arrays in Objects
// It's far more powerful nested  mixed than individuals. For example here we have an array with nested objects
const comments = [
    {
        username: 'Tammy',
        text: 'lool',
        votes: 9
    },
    {
        username: 'FishBoi',
        text: 'glub glub',
        votes: 1234567
    }
]
// To access this u will use index to allocate its position, here it's 1 so to access 'glub glub' one of these options will work fine
comments[1].text
comments[1]['text']

