class User {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
}
const tomas = new User("Tomas", 128);
const user = this.document.getElementById("user");
user.innerHTML = `Hi, ${tomas.name}. Your age is ${tomas.age}`;
const adminElement = this.document.getElementById("admin");
adminElement.innerHTML = `Hi, ${getAdmin("Vova", "Richmonder", true)}`;
function getAdmin(name, surname = "Johnson", role) {
    return role === true ? `Admin: ${name} ${surname}` : "";
}
let userTuple;
userTuple = ["Tay", 112];
for (const user of userTuple) {
    console.log("user", user);
}
userTuple = ["Gans", 63, true];
for (const user of userTuple) {
    console.log("user2", user);
}
function getTuple(name, age) {
    return [name, age];
}
console.log('getTuple("Faraw", 55)', getTuple("Faraw", 55));
let nums;
nums = [true, "Taeases", 2, 5, 8];
for (const num of nums) {
    console.log("num of nums", num);
}
const [bool, ...rest] = nums;
console.log("rest", rest);
function getNumbers(...arr) {
    let result = 0;
    for (const element of arr) {
        result += element;
    }
    return result;
}
console.log("getNumbers(3,5,2)", getNumbers(3, 5, 2));
console.log("getNumbers(3,5,2, 90)", getNumbers(3, 5, 2, 90));
function sumElems(...args) {
    let result = 0;
    for (const element of args) {
        result += element;
    }
    return result;
}
const elements = [2, 5, 7, 9, 11];
console.log("sumElems(...elements)", sumElems(...elements));
class Animal {
    constructor(animalName, animalAge) {
        this.country = "Turkey";
        this.name = animalName;
        this.age = animalAge;
    }
    getData() {
        console.log("getData() - `${this.name} ${this.age}`", `${this.name} ${this.age} ${this.country}`);
    }
}
const cat = new Animal("Tip", 3);
cat.getData();
class Dog extends Animal {
    constructor(animalName, animalAge, dogColor) {
        super(animalName, animalAge);
        this.color = dogColor;
    }
    getDogData() {
        super.getData();
        console.log("this.color", this.color);
    }
}
const dog = new Dog("Ben", 12, "grey");
dog.getDogData();
var Days;
(function (Days) {
    Days[Days["monday"] = 1] = "monday";
    Days[Days["tuesday"] = 2] = "tuesday";
    Days[Days["wednesday"] = 3] = "wednesday";
    Days[Days["thursday"] = 4] = "thursday";
    Days[Days["friday"] = 5] = "friday";
    Days["saturday"] = "Saturday";
    Days["sunday"] = "3";
})(Days || (Days = {}));
let day = Days.friday;
console.log("day", day);
console.log("Days[5]", Days[2]);
console.log("Days.saturday", Days.saturday);
console.log("Days[3]", Days[3]);
function getDayOfWeek(day) {
    if (day === Days.saturday || day === Days.sunday) {
        return "string";
    }
    return 1;
}
console.log("getDayOfWeek(Days.saturday)", getDayOfWeek(Days.saturday));
console.log("getDayOfWeek(Days.friday", getDayOfWeek(Days.friday));
//# sourceMappingURL=main.js.map