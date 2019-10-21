function highlightCell(event){
    //console.log("Writing");
    let callerName = event.target.tagName;

    //for anything other than a table cell, get out
    if(callerName.toLowerCase() != "td") return;

    //highlight cell
    event.target.classList.add("highlight");
}

function unHighlightCell(event){
    //console.log("Writing");
    let callerName = event.target.tagName;

    //for anything other than a table cell, get out
    if(callerName.toLowerCase() != "td") return;

    //highlight cell
    event.target.classList.remove("highlight");
}

// function isTD(event) {
//     for anything other than a table cell get out
//     return (event.target.tagName.toLowerCase() == "td")
// }

function showAnimals(){
    console.log("button clicked");
    let animalData = document.querySelectorAll("#animal-table td");
    let p = document.createElement("p");
    this.after(p);
    for(let animalTD of animalData) {
        p.innerHTML += animalTD.innerHTML + ", ";

    }
}

function stylePara() {

    let p = document.querySelector(".special");

    // Equal to above
    //let p = document.getElementsByClassName("special")[0];
    p.classList.toggle("highlight");
}
window.onload = function() {
    //this.document.getElementById("animal-table").addEventListener("mouseover", highlightCell);
    this.document.getElementById("animal-table").onmouseover = highlightCell;
    this.document.getElementById("animal-table").onmouseout = unHighlightCell;
    this.document.getElementById("info-btn").addEventListener("click", showAnimals);
    this.document.getElementById("btn-style").addEventListener("click",stylePara);
    this.setInterval(stylePara, 1000);
}