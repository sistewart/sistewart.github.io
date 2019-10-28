function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

    this.sayHello = function(){
        console.log("Hello "+ this.firstName + " " + this.lastName);
    }
}

let fName = prompt("Enter first name");
let lName = prompt("Enter last name");

let me = new Person(fName, lName);
console.log("Person is " + me.firstName)


