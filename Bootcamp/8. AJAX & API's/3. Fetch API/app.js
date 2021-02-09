// Fetch API //
// is the newer way of making requests via Js supports promises! not supported in Internet explorer!

fetch('https://api.cryptonator.com/api/full/btc-usd')
    .then(res => {
        console.log("RESPONSE, waiing to parce", res)
        return res.json();
        // the .json basically returns a promise as json format type 
    })
    .then(data => {
        console.log("DATA PARSED...", data)

    })
    .catch(e => {
        console.log("ERROR", e)
    })
