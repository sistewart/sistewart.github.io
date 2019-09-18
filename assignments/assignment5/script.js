"using strict"

const name = prompt("Please enter your name");
const coffees = prompt("How many coffees would you like?");
const tip = prompt("What would you like your tip to be?");

const price = coffees * 3.50;
const tax = price * .07;
const cTip = parseFloat(tip);
const totalP = parseFloat(price + tax + cTip);
const totalPrice = parseFloat(totalP.toFixed(2));

let total = document.getElementById("total");

total.innerHTML = name + " ordered " + coffees + " coffees, Total: $" + totalPrice;
