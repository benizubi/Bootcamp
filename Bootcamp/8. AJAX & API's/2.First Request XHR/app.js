// XMLHttpRequest//XHR DON'T RECOMMEND
// this was the og way of sending request via js, but doesnt suport promises so loads of callbacks!
const req = new XMLHttpRequest();

req.onload = function () {
    console.log("ALL DONE WITH REQUEST")
    const transform = JSON.parse(this.responseText)
    console.log(transform.ticker.price)
    // responsiveText just prints out the json as a text format
    // this is the object for the request itself
    // ticker is where the data is located and we wanna print out price 
}

req.onerror = function () {
    console.log("Error!!")
    console.log(this);
}

req.open('GET', 'https://api.cryptonator.com/api/full/btc-usd');
req.send();
