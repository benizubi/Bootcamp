// AXios is created by other developers to make fetching easier

// axios.get('https://api.cryptonator.com/api/full/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price)
//     })
//     .catch(err => {
//         console.log("Error, request failed...", err)
//     })

// same thing with Async 
const fetchBitcoinPrice = async () => {
    try {
        const res = axios.get('https://api.cryptonator.com/api/full/btc-usd')
        console.log(res.data.ticker.price)
    }
    catch (e) {
        console.log("Error", e)
    }
}