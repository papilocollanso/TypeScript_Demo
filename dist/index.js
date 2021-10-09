"use strict";
let named = 'prosper';
console.log("name:", named);
// basic Types
let id = 5;
let company = 'Intelligent Coding';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
// Tuple
let person = [1, 'Brad', true];
// Tuple Arrays
let employee;
employee = [
    [1, 'john'],
    [2, 'ruth'],
    [3, 'prosper']
];
//Union
let pid;
pid = 'prosper collins';
//Enumerated Types (ENUM)
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 1] = "up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "left";
    Direction2["Right"] = "right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Right);
const user = {
    id: 1,
    name: 'Collins'
};
//Types Assertion
let cid = 1;
//let customerId = <number>cid
let customerid = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
//Void
function log(message) {
    console.log(message);
}
log('Shuggie');
const user1 = {
    id: 1,
    name: 'Collins'
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const ruth = new Person(1, "Brad Traversy");
ruth.id = 0;
const prosper = new Person(2, "Mike Jordan");
prosper.id = 1;
console.log(ruth, prosper);
console.log(ruth.register());
console.log(prosper.register());
//Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
console.log(emp.name);
console.log(emp.register());
//Generics - Used to build resuable components
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'John', 'Jill']);
numArray.push(0);
strArray.push("James Bond");
console.log(numArray);
console.log(strArray);
