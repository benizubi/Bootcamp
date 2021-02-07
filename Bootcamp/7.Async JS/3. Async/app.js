// The async functions always return a promise. 
// if thhe function returns a value, the promise will be resolved with that value
// if the function throws an exception, the promise will be rejected
// for example you call async by simply writting it and it returns a promise without needing ti state it.
// const sing = async () => {
//     throw "oh nooo you awful";
//     // to reject a when using async you'll need to throw an error function within the async block
//     return 'LA LA LA LA';
// }

// sing()
//     .then((data) => {
//         console.log("Promise resolved with:", data)
//     })
//     .catch(err => {
//         console.log('oh no promised rejected')
//         console.log(err)

//     })

const login = async (username, password) => {
    if (!username || !password) throw 'missing creden'
    if (password === 'corgifeetarecute') return 'WELCOME!'
    throw 'invalid Password'

}

login('benizubi')
    .then(msg => {
        console.log("LOGGED IN!")
        console.log(msg)
    })
    .catch(err => {

        console.log("ERROR!")
        console.log(err)
    })


// THE AWAIT KEYWORD//


const delayColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    }
}

// We can only use the await keyword inside of functions declared with async.
// Await will pause the execution of the function, waiting for a promise to be resolved. 
async function rainbow() {
    await delayColorChange('red', 1000)
    await delayColorChange('black', 1000)
    await delayColorChange('green', 1000)
    await delayColorChange('blue', 1000)
    return "ALL DONE"
    // when it finishes it will return a resolved promised because we only printing success and it will then return all completed once promises are completed.
}
// the await waits until a promise is resolved before carrying on reading the function
// using await means you dont need to use the .then like below
// delayColorChange()
// .then(() => delayColorChange('orange', 1000)

// rainbow().then(() => console.log("End of RainBow!"))
// is the same as writing it like this:

async function printRainBow() {
    await rainbow();
    console.log("END OF RAINBOW!")
    // because its an async, the rainbow has to complete first before  end of raindbow gets returned
}

// Handling Errors in Async Functions // fake request
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Time :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        })
    }, delay)
}
async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } catch (e) {
        console.log("CAUGHT AN ERROR!")
        console.log("error is:", e)
    }
}
// the e in catch stands for the reference error.
// usually when the function promise has been rejected, it stops the execution and stops any code after that line to be proccessed or return anything.
// Thus, you can use try and catch to control error message
