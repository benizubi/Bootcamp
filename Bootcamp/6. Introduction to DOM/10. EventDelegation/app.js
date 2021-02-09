

// const allLis = document.querySelectorAll('li');
// for (let li of allLis) {
//     li.addEventListener('click', () => {
//         li.remove();
//         // here basically we've selected all the list and once click on it, we can delete it,
//         // however updated things wont be remove because it doesnt have event click on them
//         // so best thing to do is used the parent element to assert the remove option
//     })
// }
const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    // here we're instead of grabbing the values of what we store from the input, we saved them as a variable so we can pass on to addedtweet below

    addTweet(usernameInput.value, tweetInput.value);
    // here we passing the added tweet values to display
    usernameInput.value = '';
    tweetInput.value = '';
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

tweetsContainer.addEventListener('click', (e) => {
    // e.target.nodeName === 'LI' && e.target.remove();
    console.dir(e)
    // so the LI specificially checks for list element, if we wanted to remove everything from the parent element we can just use  e.target.remove(); instead
    // so here we're checking on the node name to see if noeName  matches li using console.dir(e.target)
    // the target checks if its of type li and then remove does remove it if clicked 
})