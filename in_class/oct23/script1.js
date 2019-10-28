console.log("testing");
let menuItem = {
    Cheese:3,
    Banana:2,
    OJ:5
}

let total = 0;
for(let item in menuItem){
    menuItem[item] *= 2;
    total += menuItem[item];
}
console.log("Total is " +total);