async function displayMovies(){
    let response = await fetch("https://portiaportia.github.io/csce242/json/movies.json");
    let movieJson = await response.json();
    let contentDiv = document.getElementById("content");

    for(i in movieJson){
        let base = movieJson[i];
        contentDiv.append(getMovie(base));
    }
}

function getMovie(movie){
    let movieSec = document.createElement("section");
    movieSec.className = "movie";

    let movieImage = document.createElement("div");
    movieImage.className = "movieStuff";
    movieSec.append(movieImage);

    let movieTxt = document.createElement("div");
    movieTxt.className = "movieStuff";
    movieSec.append(movieTxt);

    let movieName = document.createElement("h3");
    movieName.innerText = movie.title;
    movieImage.append(createImage("https://portiaportia.github.io/csce242/json/"+movie.img));
    
    movieTxt.append(movieName);
    movieTxt.append(makeList("<strong>" + "Director: " + "</strong>" + movie.director));
    movieTxt.append(makeList("<strong>" + "Actors: " + "</strong>" + movie.actors + " "));
    movieTxt.append(makeList("<strong>" + "Year: " + "</strong>" + movie.year + " "));
    movieTxt.append(makeList("<strong>" + "Genres: " + "</strong>" + movie.genres + " "));
    movieTxt.append(makeDescription(movie.description));    
   
   
    return movieSec;
}

function makeList(text){
    let ulElem = document.createElement("ul");

    let dirElem = document.createElement("li");
    dirElem.innerHTML = text;
    ulElem.append(dirElem);

    

    return ulElem;
}

function makeDescription(description){
    let addDescription = document.createElement("p");
    addDescription.innerHTML = description;

    return addDescription;
}


function createImage(path){
    let movImg = document.createElement("img");
    movImg.src = path;

    return movImg;
}

window.onload = function(){
    this.displayMovies();
}
