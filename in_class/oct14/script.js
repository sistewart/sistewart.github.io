"using strict"

function makeArray(){
    let ulelem = document.createElement("ul");

    this.after(ulelem);

    let foods = ["popcorn", "cherries", "cheesecake"];

    for(let item of foods){
        let lielem = document.createElement("li");
        ulelem.append(lielem);
        lielem.innerHTML=item;
    }

    let foodPs=document.getElementsByName("food");
    let pelem = document.createElement("p");    
    this.after(pelem);
    pelem.innerHTML = "I like ";
    for(let foodElem of foodPs){
        pelem.innerHTML+=foodElem.innerHTML+", ";
    }
}

function showRand(){
    let num = Math.floor(Math.random()*10+1);
    let showNum = document.createElement("p");
    this.after(showNum);

    showNum.innerHTML = num;
}

window.onload = function(){
    let arrayBtn = document.getElementById("make-array");
    arrayBtn.onclick = makeArray;

    let randBtn = document.getElementById("show-random");
    randBtn.onclick=showRand;
}