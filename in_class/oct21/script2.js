class Person{
    constructor(firstName, lastName){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName(){
        return this._firstName + "*";
    }
    set firstName(firstName){
        this._firstName = firstName + "!";
    }
}

me = new Person ("Amy", "Smith");
me.firstName = "Bobby";
console.log(me.firstName);