"using strict"

let loopCount = 1;
let quotesArray = [
    "Happiness often sneaks in through a door you didn't know you left open. -John Barrymore",
    "The comeback is always stronger than the setback.",
    "In a gentle way, you can shake the world. - Mahtama Gandhi",
    "If your goals don't scare you, they aren't big enough.",
    "Never let your fear decide your future."
]

let quote = document.getElementById("quoteWords");
quote.innerHTML = quotesArray[0];

function quoteLoop(){
        quote.innerHTML = quotesArray[loopCount];
        loopCount++
        if(loopCount == quotesArray.length){
            loopCount = 0;
        }
    }
   


function lotteryGame(){
    let randArray = [];
    let size = 5;
    let match = true;

    let showNum = document.createElement("p");
    this.before(showNum);
    for(let i = 0; i < size; i++){
        let randNum = Math.floor(Math.random()*10+1);
        showNum.innerHTML += randNum;
        randArray[i] = randNum;
    }

    let uArray = []
    for(let j = 0; j <size; j++){
     let uInput = document.getElementsByClassName("u-input")[j].value;
     uArray[j] = uInput;
    }   
    let spanMatch = document.getElementsByClassName("isMatch");
    for(let k = 0; k < size; k++){
        if(randArray[k] == uArray[k]){
            let spanMatch = document.getElementsByClassName("isMatch")[k];
            spanMatch.innerHTML += "match";
        }
        else{
            let spanMatch = document.getElementsByClassName("isMatch")[k];
            spanMatch.innerHTML += "not a match";
            match = false;
        }
    }
    if(match == true){
        let goodMsg = document.createElement("p");
        this.after(goodMsg);

        goodMsg.innerHTML = "YAY you won the lottery!";
    }
    else {
        let sorryMsg = document.createElement("p");
        this.after(sorryMsg);

        sorryMsg.innerHTML = "Better luck next time :(";
    }
}

quoteLoop();
window.onclick = function(){
    setInterval(quoteLoop, 2000);
    let lottResults = document.getElementById("play-lottery");
    lottResults.onclick = lotteryGame;
}