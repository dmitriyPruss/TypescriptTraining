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
class Auto {
    go() {
        console.log("-------------");
        console.log("Automobile go");
    }
}
class Volkswagen extends Auto {
    constructor(color, year, model) {
        super();
        this.getData = () => `model - ${this.model}`;
        this.model = model;
    }
    go() {
        super.go();
        console.log("this.model", this.model);
    }
}
const passat = new Volkswagen("green", 2011, "Passat");
console.log("passat.getData()", passat.getData());
passat.go();
class Building {
    constructor(name, year, steps) {
        this.name = name;
        this.year = year;
        this.steps = steps;
        this.getData = () => `${this.name} ${this.year}`;
    }
    setYear(year) {
        if (year > 0 && year <= 2022) {
            return year;
        }
        return null;
    }
}
const house = new Building("Castle", 1820, 5);
class Skyfall extends Building {
    constructor(name, year, steps) {
        super(name, year, steps);
    }
    getSkyfallData() {
        console.log(`${this.getData()}. steps: ${this.steps}`);
    }
}
const skyFall = new Skyfall("110", 1995, 100);
skyFall.getSkyfallData();
class Fruit {
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this._name;
    }
    set name(str) {
        this._name = str === "" ? "Empty value!" : str;
    }
}
const cherry = new Fruit("cherry");
console.log("cherry.name - ", cherry.name);
cherry.name = "";
console.log("cherry.name - ", cherry.name);
class Plant {
    get height() {
        return Plant._height;
    }
    set height(val) {
        Plant._height = val > 0 ? val : 0;
    }
    static getHeight(name) {
        console.log("`${name} - ${Plant.height} m`", `${name} - ${Plant._height} m`);
    }
}
class Tree extends Plant {
    constructor(name) {
        super();
        this.name = name;
    }
    getTreeData() {
        Plant.getHeight(this.name);
    }
}
const apple = new Tree("apple");
apple.height = -2;
console.log("apple.height", apple.height);
apple.height = 7;
apple.getTreeData();
const adidas = {
    name: "adidas",
    size: 42,
    color: "red",
    getParams() {
        if (this.color) {
            return `${this.name} ${this.size} ${this.color}`;
        }
        return `${this.name} ${this.size}`;
    },
};
console.log("adidas.getParams()", adidas.getParams());
class Labutens {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
    getParams() {
        return `${this.name} ${this.size}`;
    }
}
const lapti = new Labutens("labutens", 33);
console.log("lapti.getParams()", lapti.getParams());
const getPersonData = function (name, surname, country) {
    return `${name} ${surname} ${country}`;
};
const kventin = getPersonData("Kwentin", "Tarantino", "USA");
console.log("kventin", kventin);
let phoneBook = {
    Fred: 380605050332,
    Nika: 750907009080,
};
console.log('phoneBook["Nika"]', phoneBook["Nika"]);
function getNewUser() {
    const newUser = function (login, email) {
        newUser.data = login + " - " + email;
    };
    newUser.auth = () => {
        console.log("`${newUser.data} ${newUser.password}`", `${newUser.data} ${newUser.password}`);
    };
    return newUser;
}
const gennadiy = getNewUser();
gennadiy("gennadiy", "gena78@gmail.com");
gennadiy.password = "gena_bez_keygena)))";
gennadiy.auth();
//# sourceMappingURL=main.js.map