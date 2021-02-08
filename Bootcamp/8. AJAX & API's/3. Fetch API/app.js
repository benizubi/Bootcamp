// Fetch API //
// is the newer way of making requests via Js supports promises! not supported in Internet explorer!

fetch('https://api.cryptonator.com/api/full/btc-usd')
    .then(res => {
        console.log("RESPONSE", res)
    })
    .catch(e => {
        console.log("ERROR", e)
    })
