//let person = new Object();

//let person ={};

let person = {
    firstName: "Amy",
    lastName: "Smith",
    age:20,
    hobbies:["reading","learning","studying"]

sayHello(){
    console.log("Hello " + this.firstName);
},
}
/*
console.log(person.firstName + " " + person.lastName);

//get a key from the user and display the value
let key = "firstName";
console.log(person[key]);
console.log(person["lastName"]);


//loop through for keys
for(key in person){
    console.log(key + ": " + person[key]);
}
*/

person.sayHello();