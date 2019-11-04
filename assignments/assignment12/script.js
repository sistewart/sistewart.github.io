async function displayMovies(){
    let response = await fetch("https://portiaportia.github.io/csce242/json/movies.json");
    let movieJson = await response.json();
    let contentDiv = document.getElementById("content");

    for(i in movieJson){
        let base = movieJson[i];
        contentDiv.append(getMovie(movie));
    }
}

function getMovie(movie){
    let movieSec = document.createElement("section");
    movieSec.className = "movie";
    let movieName = document.createElement("h3");
    movieName.innerText = movie.title;
    movieSec.append(movieName);
    movieSec.append(makelist(movie.director,movie.actors,movie.year,movie.genres));
    movieSec.append(makeDescription(description));

    return movieSec;
}

function makeList(director,actors,year,genres){
    let ulElem = document.createElement("ul");

    let dirElem = document.createElement("li");
    dirElem.innerHTML = director;
    ulElem.append(dirElem);

    let actElem = document.createElement("li");
    actElem.innerHTML = actors;
    ulElem.append(actElem);

    let yearElem = document.createElement("li");
    yearElem.innerHTML = year;
    ulElem.append(yearElem);

    let genreElem = document.createElement("li");
    genreElem.innerHTML = genres;
    ulElem.append(genreElem);

    return ulElem;
}

function makeDescription(description){
    let addDescription = document.createElement("p");
    addDescription.innerHTML = "Description: " + movie.description;

    return addDescription;
}

window.onload = function(){
    this.displayMovies();
}
