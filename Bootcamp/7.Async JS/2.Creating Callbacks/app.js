// promises//
// making promises always has free steps, pending, success and fialure, if there's nothing listed, it will automatically be pending, otherwise, it will pick other options
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('your fake data here');
            } else {
                reject('request error');
            }
        }, 2000)
    })
}

fakeRequest('benizubi.com/page1')
    .then((data) => {
        console.log('done with request')
        console.log('data result is:', data)
        return fakeRequest('benizubi.com/page2')
    })
    .then(() => {
        console.log('done with request(page2)')
    })
    .catch((err) => {
        console.log('we done now hahah',err)
    })
