"using strict"
function displayFruits(){
    //gather fruit names
    /*const fruit1 = document.getElementById("fruit1").textContent;
    const fruit2 = document.getElementById("fruit2").textContent;
    const fruit3 = document.getElementById("fruit3").textContent;*/
    const fruit1 = document.getElementById("fruit1").value;
    const fruit2 = document.getElementById("fruit2").value;
    const fruit3 = document.getElementById("fruit3").value;
    //fruit1.innerHTML = "What a good day!";

    //write to result paragraph
    const resultElem = document.getElementById("result");
    resultElem.textContent = `You like ${fruit1}, ${fruit2}, and ${fruit3}`;
    //console.log('first fruit ${fruit1}');
    /*
    const fruit2 = document.getElementById("fruit2");
    fruit2.innerHTML="banana";
    const fruit3 = document.getElementById("fruit3");
    fruit3.innerHTML="grapes";
*/}

//get button
const btnresult = document.getElementById("btn-results");
btnresult.onclick = displayFruits;
//displayFruits();