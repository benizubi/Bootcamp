const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // this stops us from leaving the page
    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    // // here we selecting both input forms username and tweet so we can list it
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    // here we're instead of grabbing the values of what we store from the input, we saved them as a variable so we can pass on to addedtweet below

    addTweet(usernameInput.value, tweetInput.value);
    // here we passing the added tweqet values to display
    usernameInput.value = '';
    tweetInput.value = '';
    // after display we're going to reset the  the value so we can input more stuff 
    //instead of calling each element and passing it on to its value, like we did at the start of the function method,  creating a seperate function to add is easier to read
    // console.log(usernameInput.value, tweetInput.value)
    // w'ere printing out the value of the input through console.
    // e.preventDefault();
    // prevent defaults here basically stops and prevents the form from loading the action since we haven't set a work page yet and we need the action on html inorder for this to run
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`-${tweet}`);
    tweetsContainer.append(newTweet);
    // append basically adds these to the created elements so here we adding to the list
}