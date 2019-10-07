//While loop from 1 to 10 and display the numbers in the console
//FIRST EXAMPLE
let count = 1;

while(count <= 10){
    console.log(`${count},`);
    count++;
}

function pageLinks(){
    //create links
    let linkElem = document.getElementById("links");

    //for loop
    for(let i = 1; i<=5;i++){
        console.log(i);
        aElem = document.createElement("a");
        linkElem.append(aElem);
        aElem.innerHTML = `Page${i}`;
        aElem.href=`#${i}`;
    }
}

function displayCount(){
//While loop from 1 to 10 and display the numbers in the console
    //create unordered list element
    ulElem=document.createElement("ul");
    contentElem = document.getElementById("content");
    contentElem.append(ulElem);

    let count = 1;

    while(count <= 10){
        //create list element
        liElem = document.createElement("li");
        liElem.innerHTML = count;
        //append list element to ul element
        ulElem.append(liElem);
        console.log(`${count}`);
        count++;
    }

    //append ul element to content
}


function displayTimesTables(){
    //insert table after button
    let tableElem = document.createElement("table");
    this.after(tableElem);

    //loop through and create
    for(let row=1; row<=10;row++){
        let tablerow = document.createElement("tr");
        tableElem.append(tablerow);
        //tableElem.id or tableElem.classList.add("dfsf") for css
        for(let col=1; col<=10; col++){
            let tablecol = document.createElement("td");
            tableElem.append(tablecol);
            tablecol.innerHTML= row*col;

        }
    }
}
window.onload = function(){
    this.displayCount();
    this.pageLinks();
    
    let multBtn = document.getElementById("multip-btn");
    multBtn.onclick = displayTimesTables;
}