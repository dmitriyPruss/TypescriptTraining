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
function sum(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
let op;
op = sum;
console.log("op(2,5)", op(2, 5));
op = multiply;
console.log("multiply(3,3)", multiply(3, 3));
const concating = (a, b) => `${a} - ${b}`;
console.log("showResults(3, 5, concating(a, b)) : ", showResults(3, 5, concating));
console.log('showResults("look", "up", (a, b) => `${a} ! ${b}`', showResults("look", "up", (x, y) => `${x} ! ${y}`));
function showResults(a, b, operation) {
    return operation(a, b);
}
//# sourceMappingURL=main.js.map