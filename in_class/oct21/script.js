class Person {
    constructor(fName,lName){
        this._firstName = fName;
        this._lastName = lName;
    }
    getFirstName(){
        return this._firstName;
    }
    getLastName(){
        return this._lastName;
    }
    setFirstName(fName){
        this._firstName = fName;
    }
}

class myDate{
    constructor(hr,min,sec){
        this._hour = hr;
        this._minutes = min;
        this._seconds = sec;
    }
    getHour(){
        return this._hour;
    }
    setHour(hr){
        this._hour = hr;
    }
    getMinutes(){
        return this._minutes;
    }
    setMinutes(min){
        this._minutes = min;
    } 
    getSeconds(){
        return this._seconds;
    }
    setSeconds(sec){
        this._seconds = sec;
    }
    getFormattedDate(){
        return `${this.prependZero(this._hour)}:${this.prependZero(this._minutes)}:${this.prependZero(this._seconds)}`;
    }
    prependZero(data){
        if(data < 10) {
            return "0" + data;
        }
        return data;
    }
}

class Food{
    constructor(name, cals){
        this._name = name;
        this._calories = cals;
    }
    getName(){
        return this._name;
    }
    setCalories(cals){
        this._calories = cals;
    }
    getCalories(){
        return this._calories;
    }

    getTableRow(){
        let trElem = document.createElement("tr");
        let tdNameElem = document.createElement("td");
        let tdCalElem = document.createElement("td");
        tdNameElem.innerHTML = this._name;
        tdCalElem.innerHTML = this._calories;
        trElem.append(tdNameElem);
        trElem.append(tdCalElem);
        return trElem;
    }
}

foods = [];
foods.push(new Food("Orange", 10));
foods.push(new Food("cheese", 20));
foods.push(new Food("sprinkles",5));
foods.push(new Food("omelette", 250));

let totalCals = 0;
for(food of foods){
    console.log(food.getName());
    totalCals += food.getCalories();
}
console.log("Calories: " + totalCals);
//move script down or use window onload
let tableElem = document.createElement("table");
let contentDiv = document.getElementById("content");
contentDiv.append(tableElem);

for(food of foods){
    console.log(food.getName());
    totalCalories += food.getCalories();

    tableElemElem.append(food.getTableRow());
}

date = new myDate(2,33,87);
console.log(date.getFormattedDate());

me = new Person("Amy","Anderson");
me.setFirstName("Bobby");
console.log(me.getFirstName());
console.log(me.getLastName());
console.log(typeof(Person));
