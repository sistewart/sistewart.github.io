async function special(){
 /*   console.log("In special beginning");
    let result = await setTimeout(doStuff, 2000);
    console.log("in special ending");
}

function doStuff(){
    console.log("in do stuff");
}

window.onload = function(){
    this.console.log("Befoe calling special");
    this.special();
    this.console.log("after calling special");
}*/

async function displayShoe(){
    console.log("3");
    let response = await fetch("https://portiaportia.github.io/csce242/json/shoe.json")
    console.log("4")
    console.log("5");

    let shoeJson = await response.json();

    let shoeName = shoeJson.name;
    let shoeBrand = shoeJson.brand;

    console.log(`${shoeName} by ${shoeBrand}`)

    for (i in reviews){
        console.log(reviews[i]);s
    }

    //append a section with info about the shoe to your page
    let section = document.createElement("section");
    section.innerHTML = `${shoeName} by ${shoeBrand}`;
    let content = document.getElement by ID;
    content.append(section);
}

window.onload = function(){
    console.log("1");
    this.displayShoe();
    console.loeg("2");

    //append a h1 to your page
    let content = document.getElementById("content");
    let h1 = document.createElement("h1");
    h1.innerHTML = 'I love shoes';
    content.append(h1);
}
