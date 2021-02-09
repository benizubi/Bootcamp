// AXios is created by other developers to make fetching easier
// recommend uing this, request type as its easier than XML or fetch methods
// axios.get('https://api.cryptonator.com/api/full/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price)
//     })
//     .catch(err => {
//         console.log("Error, request failed...", err)
//     })

// same thing with Async //
const fetchBitcoinPrice = async () => {
    try {
        const res = axios.get('https://api.cryptonator.com/api/full/btc-usd')
        console.log(res.data.ticker.price)
    }
    catch (e) {
        console.log("Error!", e)
    }
}
// getting Headers with AXios//
const btn = document.querySelector('#btn1');
const jokes = document.querySelector('#jokes');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLi = document.createElement('LI');
    newLi.append(jokeText);
    jokes.append(newLi)
    // so here we basically adding the new joke to the created li
    // also we inserting the text into the li created
}
const getDadJoke = async () => {
    try {

        const config = { headers: { Accept: 'application/json' } }
        // the config is basically where we need to access the header and the specific content we trying to get back from the server
        // the key type for this header is accept
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
        // .data.joke collects and prints out the joke
    }
    catch (e) {
        return "No Jokes Available! sorry :(", e;
    }
}
btn1.addEventListener('click', addNewJoke)