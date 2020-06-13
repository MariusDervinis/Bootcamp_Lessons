
var MovieDB = [
    {
        Title: "The Godfather",
        Rating: 9.1,
        hasWatched: false
    },
    {
        Title: "The Dark Knight",
        Rating: 9.0,
        hasWatched: true
    },
    {
        Title: "Pulp Fiction",
        Rating: 8.9,
        hasWatched: false
    },
    {
        Title: "Fight Club",
        Rating: 8.8,
        hasWatched: true
    }
]
    ;


function buildString(movie){
    var result = "You have ";
    if (movie.hasWatched) {
        result += "Watched ";
    }
    else {
        result += "Not seen ";
    }
    result += "\"" + movie.Title + "\" - ";
    result += movie.Rating + " stars";
    return result;
}

MovieDB.forEach(function(movie){
    console.log(buildString(movie));
});

// MovieDB.forEach(function (movie) {
//     var result = "You have ";
//     if (movie.hasWatched) {
//         result += "Watched ";
//     }
//     else {
//         result += "Not seen ";
//     }
//     result += "\"" + movie.Title + "\" - ";
//     result += movie.Rating + " stars";
//     console.log(result);
// });








