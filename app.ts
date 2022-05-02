class User {
  name: string;
  age: number;

  constructor(_name: string, _age: number) {
    this.name = _name;
    this.age = _age;
  }
}

const tomas: User = new User("Tomas", 128);
const user = this.document.getElementById("user");
user.innerHTML = `Hi, ${tomas.name}. Your age is ${tomas.age}`;

const adminElement = this.document.getElementById("admin");
adminElement.innerHTML = `Hi, ${getAdmin("Vova", "Richmonder", true)}`;

// Training 1
function getAdmin(
  name: string,
  surname: string = "Johnson",
  role?: boolean
): string {
  return role === true ? `Admin: ${name} ${surname}` : "";
}

// Training 2
function sum(a: number, b: number): number {
  return a + b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

type Operation = (a: number, b: number) => number;

let op: Operation;

op = sum;
console.log("op(2,5)", op(2, 5));

op = multiply;
console.log("multiply(3,3)", multiply(3, 3));

// Training 3
type multiOperation = (
  x: number | string,
  y: number | string
) => number | string;

const concating = (a: number | string, b: number | string): number | string =>
  `${a} - ${b}`;

console.log(
  "showResults(3, 5, concating(a, b)) : ",
  showResults(3, 5, concating)
);

console.log(
  'showResults("look", "up", (a, b) => `${a} ! ${b}`',
  showResults("look", "up", (x, y) => `${x} ! ${y}`)
);

function showResults(
  a: number | string,
  b: number | string,
  operation: multiOperation
) {
  return operation(a, b);
}