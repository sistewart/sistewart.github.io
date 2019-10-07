"using strict"

function asciiValues(){
    let asciiValue = document.createElement("p");
    this.after(asciiValue);

    let word = document.getElementById("word").value;
    for(let i = 0 ; i < word.length; i++){
        asciiValue.innerHTML += word.charCodeAt(i);
        if(i < word.length-1){
            asciiValue.innerHTML += ", ";
        }

    }


}


function sumEvenNums(){
    //inserts paragraph after the button is pushed
    let numSum = document.createElement("p");
    this.after(numSum);
    
    let finalNum = document.getElementById("number").value;
    let sum = 0;

    for(let i = 0; i<=finalNum; i+=2){
        sum += i;
    }
    numSum.innerHTML = `Sum: ${sum}`;
}

window.onclick = function(){
    let valueResults = document.getElementById("value-results");
    valueResults.onclick = asciiValues;

    let addingNums = document.getElementById("add-nums");
    addingNums.onclick = sumEvenNums;
}