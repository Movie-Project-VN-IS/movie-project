$(document).ready(function(){
    alert('Page loading')
});
    "use strict"


const url = 'https://lyrical-leeward-vinyl.glitch.me/movies';
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },

};
let responses = fetch(url,options)
    responses.then(response => response.json()).then(movies=>console.log(movies))

//how to talk to the form?
// how does the form talk to the database?


const movieObj = {
    movie_id: 1,
    name: 'Bridesmaids',
    rating: 5,
    comments: "This is super funny"
};


let addMovie = {
    method:"POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(movieObj)
}
fetch(url, addMovie).then(function (response){
    console.log(response)
});

