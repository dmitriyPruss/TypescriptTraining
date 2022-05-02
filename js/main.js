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
const getId = (id) => id === null ? "Nothing!" : `your id - ${id}`;
console.log('getId("str")', getId("str"));
console.log("getId(22)", getId(22));
console.log("getId(null)", getId(null));
const userObj = { name: "Ari" };
if ("age" in userObj) {
    console.log('userObj["age"]', userObj["age"]);
}
else {
    console.log('userObj["name"]', userObj["name"]);
}
const user_data = { name: "Tina", age: 33, role: "user" };
const admin_data = { name: "Greg", role: "admin" };
const unknown_data = { name: "Anonymous", age: 12000 };
console.log("getUserData(user_data)", getUserData(user_data));
console.log("getUserData(admin_data)", getUserData(admin_data));
console.log("getUserData(unknown_data)", getUserData(unknown_data));
function getUserData({ name, age = 100, role, }) {
    return role !== undefined
        ? `${name} ${age} - ${role}`
        : `${name} ${age} - status 'unknown'`;
}
//# sourceMappingURL=main.js.map