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

