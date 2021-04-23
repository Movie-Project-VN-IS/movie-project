$(document).ready(function(){
    "use strict"

const url = 'https://lyrical-leeward-vinyl.glitch.me/movies';

    function updateMovieList() {
        let html = "";

        fetch(url).then(function (response) {
            return response.json()

            /** ?? what is happening here: */
        }).then(function (response) {
            response.forEach(function (movie) {
                $("#loading").css("display", "none")
                html += (renderMovies(movie)); //appending by running the renderMovies and passing the single movie, after loop, what are you doing with the html?
            })

            console.log(html)
            $("#movie-list").html(html)
        })

        function renderMovies(movie) {
            let html = "";
            html += `<div>Movie: ${movie.title}</div>`
            html += `<div>Rating: ${movie.rating}</div>`
            // html +=`<div>${movie.genre}</div>`
            // html +=`<div>${movie.year}</div>`

            return html

        }
    }
    updateMovieList()

    // create a function to wrap around entire code, then call the function when the page loads,call it again after you have successfully added a movie

// how is the form going talk to the api?
    // how can we add the user inputs to the backend?
    // how do we structure our objects to list each property out?


/** user input button part */

    $("#movie-name-new-submit").click(function(e){
        e.preventDefault();
        let movieTitle = $("#movie-title-new").val()
        let movieRating = $("#rating").val()

        let movieObj = {title:movieTitle , rating:movieRating}; //this came from the input
        console.log(movieObj);

        // const movieObj = {
        //     movie_id: 1,
        //     name: 'Bridesmaids',
        //     rating: 5,
        //     comments: "This is super funny"
        // };


        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movieObj),
        };
        fetch(url, options)
            .then((response) => {
                console.log(response)
                updateMovieList();
            })
            .catch(/* handle errors */);

    })

    let putURL = 'https://lyrical-leeward-vinyl.glitch.me/movies'



    $("#edit-movie-submit").click(function(e) {
        e.preventDefault();
        let editedmovieTitle = $("#edit-movie").val()
        let editedmovieRating = $("#edit-movie").val()

        let editedMovieObj = {title: editedmovieTitle, rating: editedmovieRating}; //this came from the input
        console.log(editedMovieObj);

        let options = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedMovieObj)
        }

        fetch(putURL, options).then(function (response) {
            console.log(response)

        });
    });


});

