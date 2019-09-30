"using strict"

function showGiftMessage(){
    //console.log("Showing my gift");
    let giftResult = document.getElementById("giftResult");
    let present = document.getElementById("gift").value;
    present = present.toLowerCase().trim();

    // if(gift=="doll"){
    //     giftResult.innerHTML = "I love dolls";
    // }

    // else {
    //     giftResult.innerHTML = "That's not a good choice";
    // }
    //giftResult.innerHTML = "<strong>No I'm definitely broke</strong>";

    switch(present){
        case "doll":
            giftResult.innerHTML = "I love dolls";
            break;
        case "car":
            giftResult.innerHTML = "I love cars";
            break;
        default:
            giftResult.innerHTML = "I think you should get something else";
    }
}

//html and css loaded to page
window.onload = function(){
    const btnDisplay = document.getElementById("btnDisplay");
    btnDisplay.onclick = this.showGiftMessage;
}
