// Fetch API //
// is the newer way of making requests via Js supports promises! not supported in Internet explorer!

// fetch('https://api.cryptonator.com/api/full/btc-usd')
//     .then(res => {
//         console.log("RESPONSE, waiing to parce", res)
//         return res.json();
//         // the .json basically returns a promise as json format type 
//     })
//     .then(data => {
//         console.log("DATA PARSED...")
//         console.log(data.ticker.price)

//     })
//     .catch(e => {
//         console.log("ERROR", e)
//     })
// same thing but with async 
const fecthBitcoinPrice = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/full/btc-usd')
        const data = await res.json();
        console.log(data.ticker.price)
    }
    catch {
        console.log("Try again, server failed")
    }
    // we do the try and catch just so we can catch the error with a specific message
}