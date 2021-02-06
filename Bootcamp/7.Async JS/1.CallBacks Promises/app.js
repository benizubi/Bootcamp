// THE CALL STACK
// is the mechanism the JS interpreter uses to keep track of its place in a script that calls multiple functions
// Hwo JS knows which function is currently being run and what functions are called from within that function, etc..

// we add things on top of the stacks, not bottom, and also we remove something we remove from the top not the bottom
const multiply = (x, y) => x * y;
const square = (x) => multiply(x, x);
const isRightTrinagle = (a, b, c) => {
    return square(a) + square(b) === square(c)
};
isRightTrinagle(3, 5, 6)
// so here thee stack is first going to figure out the solution for a then b then c
// so for square it still stac kthe square  value, then mulitply be done an order to return the value, then off muliply of the stack, then tak square of the stack, then same thing for all and will return true or false


// WebAPIs & Single Threaded //
// browsers come with Apis that are able to handle cetain taks in the background, like making requests or setTimeOut
// At any given point in time, that single js thread is running at most one line of js code.
console.log("Sending request to server");
setTimeout(function () {
    console.log('Here is your data from the server...')
}, 3000)
// so if i ran this code, the first console will be printed then then last one then the 2 second because it takes 3 sec before displaying
// but instead of waiting for value to display, the api moved directly to the next line
console.log('Done now')

// Call Backs//
// is used to delay coding execution
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'blue';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//         }, 2000)
//     }, 2000)
// }, 1000)
// here i have done nested timeout call backs so first display red then yellow
// rewtritting as a function for mulitple purposesp.
const delayingColors = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}
delayingColors('red', 3000, () => {
    delayingColors('orange', 1000, () => {
        delayingColors('blue', 1000, () => {

        })
    })
})

// even tho you can, but nesting like done above is bad. But you will often see the type of esting like listed below
// -----------------------------------------------------------------------------------------------------------
// rewritting delayedColorChange using prmises which condences it all without needing to nest things :
const delayingColors = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        })
    })
}
delayingColors('red', 1000)
    .then(() => delayingColors('blue', 1000))
    .then(() => delayingColors('red', 1000))
    .then(() => delayingColors('green', 1000))
    .then(() => delayingColors('black', 1000))
// this is much easier to read and clean the code like this because of using promiseses
// also here we only want a success no fail hence why no catch 
// ---------------------------------------------------------
searchMovieAPI('amadeus', () => {
    saveToMyDB(movies, () => {
        // if it works, run this:
    }, () => {
        // if it doesnt work, run this:
    }, () => {
        // if API is down, or requested failed
    })
})


// Enter Promises //
// A primise is an object representing the eventual completion or failure of an asynchronous operation.
// the code below is a fake call back
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('connection Timeout :(')
        } else {
            success(`Here is your fake data from${url}`)
        }
    }, delay)
}


// when making a call back we need the sucess and failure call back for when something works, to perform something and failure for when it fails to load the data, what alternative option I have.


// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log('IT WORKED!!!')
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log('IT WORKED AGAIN!!!')
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log('IT WORKED AGAIN (3rd req)!!!')
//                         console.log(response)
//                     },
//                     function (err) {
//                         console.log('ERROR (3rd req)!!!', err)
//                     })
//             },
//             function (err) {
//                 console.log('ERROR (2nd req)!!!', err)
//             })
//     }, function (err) {
//         console.log('ERROR!!!', err)
//     })
// if we have more than one call back to handle, it makes perfect sense to nest it within the callback function like the code above.

// this is the promise function call back 
// the promise has 3 stages, the 'resolved' which means successful, 'pending' for its going to read something so its pending and rejected for failure
const fakeRequestCallback = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`here is your fake data frm ${url}`)
            }
        }, delay)
    })
}
// here we calling the promises callback, but when a request fails we can make it catch something or display something like done below
// so if the pull request fail, then it will either be succesful or fail and when that does, we set it to catch other things
// here below is a more presentable promise  call back
// fakeRequestCallback('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log('it worked!!!(page1)')
//         fakeRequestCallback('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log('it worked!!!(page2)')
//                 fakeRequestCallback('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log('it worked!!!(page3)')
//                     })
//                     .catch(() => {
//                         console.log("OH NO, ERROR!!!(page3)")
//                     })
//             })
//             .catch(() => {
//                 console.log("OH NO, ERROR!!!(page2)")
//             })
//     })
//     .catch(() => {
//         console.log("OH NO, ERROR!!! (page1)")
//     })

// here I'm rewriting the promise code commented out.

fakeRequestCallback('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log('it worked!!!(page1)')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
        // here we're returning it to call for the next promise, by doing this, i won't need to nest it like done above.
    })
    .then(() => {
        console.log('IT WORKED!!!!! (page2)')
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then(() => {
        console.log('IT WORKED!!!!! (page3)')
    })
    .catch(() => {
        console.log('oooops failed! try again')
    })
    // we add arguments in the function if we want to pass on values to return
    // the argument 'data' is being passed on here, so that it can actually return back the data when dealing with requests.
// here we only returning if we want to make another request basically.
// also instead of having individual catch, we can just use the same catch to show when the code doesnt run.