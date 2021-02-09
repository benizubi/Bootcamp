const form = document.querySelector('#searchForm');
let isSearchOver = false;
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    //the form input is called query so here we're retrieving the value from the form
    //so basically whatever i set for name on html input, is what will be used, here its query.
    //here we extra the search term from the form
    const config = { params: { q: searchTerm } }
    // const config = { params: { q: searchTerm }, header: {} }
    //we have set q to search term because q represent a search for this api 
    //here we called params, but we can also call headers like this { headers: {}} depending on what we're looking for as headers got multiple purposes, but here we care about params.
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImg(res.data)
    // .data so it can return the whole data
    form.elements.query.value = '';
    //here instead of using the whole api link i have cut off the search part, so q for search can be used seperately like done above to allo keyword searches.
    //the config is part of the entire url  and we have set q to be searchTerm instead 
    // e.target.nodeName === 'IMG' && e.target.remove(); dunno.
})

const makeImg = (shows) => {
    for (let result of shows) {
        if (result.show.image !== isSearchOver) {

            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            // show image medium is the specific object key name for this specific image based on postman
            document.body.append(img)
        } else {

        }
    }
}

