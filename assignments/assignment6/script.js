"using strict"

function calculateTotal(){
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const productName = document.getElementById("productName").value;
    const productNum = document.getElementById("productNum").value;
    const productPrice = document.getElementById("productPrice").value;
    const tax = document.getElementById("tax");

    const price = parseFloat(productNum*productPrice);
    const productTax = parseFloat(price *.07);
    const totalP= parseFloat(price+productTax);
    const totalPrice = parseFloat(totalP.toFixed(2));


    const resultElem = document.getElementById("result");

    resultElem.textContent = `${firstName} ${lastName} ordered ${productNum} ${productName}(s)`;

    const totalElem = document.getElementById("total");
    
    totalElem.textContent = `Totalling: $${totalPrice}`;
}

const btnresult = document.getElementById("btn-results");
btnresult.onclick = calculateTotal;
/*const name = prompt("Please enter your name");
const coffees = prompt("How many coffees would you like?");
const tip = prompt("What would you like your tip to be?");

const price = coffees * 3.50;
const tax = price * .07;
const cTip = parseFloat(tip);
const totalP = parseFloat(price + tax + cTip);
const totalPrice = parseFloat(totalP.toFixed(2));

let total = document.getElementById("total");

total.innerHTML = name + " ordered " + coffees + " coffees, Total: $" + totalPrice;
*/