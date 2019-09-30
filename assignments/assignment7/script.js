"using strict"

function ageOrder(){
    const nameOne = document.getElementById("name-one").value;
    const ageOne = document.getElementById("age-one").value;
    const nameTwo = document.getElementById("name-two").value;
    const ageTwo = document.getElementById("age-two").value;
    const nameThree = document.getElementById("name-three").value;
    const ageThree = document.getElementById("age-three").value;
    const orderResult = document.getElementById("order-results");

   if((ageOne > ageTwo) && (ageOne > ageThree)){
        if(ageTwo > ageThree){
            orderResult.textContent = `Oldest to youngest:${nameOne}, ${nameTwo}, ${nameThree}`;
        } else {
            orderResult.textContent = `Oldest to youngest:${nameOne}, ${nameThree}, ${nameTwo}`;
        }
    } else if((ageTwo > ageOne) && (ageTwo > ageThree)) {
        if (ageOne > ageThree){
            orderResult.textContent = `Oldest to youngest:${nameTwo}, ${nameOne}, ${nameThree}`;
        } else{
            orderResult.textContent = `Oldest to youngest:${nameTwo}, ${nameThree}, ${nameOne}`;
        } 
    } else if((ageThree > ageOne) && (ageThree > ageTwo)) {
        if (ageOne > ageTwo){
            orderResult.textContent = `Oldest to youngest:${namethree}, ${nameOne}, ${nameTwo}`;
        } else {
            orderResult.textContent = `Oldest to youngest:${nameThree}, ${nameTwo}, ${nameOne}`;
        }
        }
}
    
const orderingResult = document.getElementById("ordering-results");
orderingResult.onclick = ageOrder;

function translator(){
    const language  = document.getElementById("language").value;
    const translationResults = document.getElementById("translation-results");

    if(language.toLowerCase() == "english"){
        translationResults.textContent = `Hello World`;
    } else if(language.toLowerCase() == "spanish"){
        translationResults.textContent = `Hola Mundo`;
    } else if(language.toLowerCase() == "french") {
        translationResults.textContent = `Bonjour le Monde`;
    } else if(language.toLowerCase() == "italian") {
        translationResults.textContent = `Ciao mondo`;
    }
}

const translateResult = document.getElementById("translate-results");
translateResult.onclick = translator;


function pluralizer(){
    const itemNum = document.getElementById("item-num").value;
    const itemName = document.getElementById("item-name").value;
    const pluralized = document.getElementById("new-name");
    
    let errorSpan = document.getElementById("error-positive-number");
   /* if(errorSpan != null) {
        errorSpan.remove();
    }*/
    if(itemNum < 0){
        const errorSpan = document.createElement("span");
        errorSpan.id = "error-positive-number";
        errorSpan.innerHTML = "Please enter a positive number!";
        errorSpan.classList.add("error");
        this.after(errorSpan);
       
    } else if(itemNum > 1){
        pluralized.textContent = `${itemName}(s)`;
    } else {
        pluralized.textContent = `${itemName}`;
    }
}

const pluralresult = document.getElementById("pluralize-results");
pluralresult.onclick = pluralizer;
