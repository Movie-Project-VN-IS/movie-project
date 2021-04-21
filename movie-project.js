const reviewObj = {
    restaurant_id: 1,
    name: 'Codey',
    rating: 5,
    comments: "This is a really good place for coding and eating"
};
const url = 'https://lyrical-leeward-vinyl.glitch.me/movies';
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    // body: JSON.stringify(reviewObj),
};
let responses = fetch(url,options)
    responses.then(response => response.json()).then(movies=>console.log(movies))

// how to talk to the form?
// how does the form talk to the database?


