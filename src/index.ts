let named= 'prosper';
console.log("name:", named);

// basic Types
let id: number =5;
let company: string ='Intelligent Coding';
let isPublished: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1,2,3,4,5]

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true]
// Tuple Arrays
let employee: [number, string][]

employee = [
   [1,'john'],
   [2,'ruth'],
   [3,'prosper']

]
//Union
let pid:string | number;
pid='prosper collins';

//Enumerated Types (ENUM)

enum Direction1{
    up=1,
    Down,
    Left,
    Right
}
enum Direction2{
    up='Up',
    Down='Down',
    Left="left",
    Right ="right"
}
console.log(Direction2.Right);
//Objects
type User={
    id:number,
    name:string
}
const user:User = {
    id: 1,
    name: 'Collins'
}

//Types Assertion

let cid: any =1 
//let customerId = <number>cid
let customerid = cid as number

 //Functions
 function addNum(x:number, y:number): number{
     return x + y
 }
 console.log(addNum(1,2));
 
 //Void
 function log(message: string | number): void {
    console.log(message)

 }
 console.log(log('Shuggie'))

 //Interfaces

 interface UserInterFace{
    readonly id:number,
    name:string
    age?:number
}
const user1:UserInterFace = {
     id: 1,
    name: 'Collins'
}
type Point = number | string
const p1:Point =1
//user1.id =5

interface MathFunc{
    (x:number, y:number):number
}
const add: MathFunc =(x:number, y:number):number => x + y
const sub: MathFunc =(x:number, y:number):number => x - y

//Classes

interface PersonInterFace{
     id:number,
    name:string
    register(): string
    
}

class Person implements PersonInterFace{
    id:number
    name:string
    constructor(id:number, name:string){
       this.id =id;
       this.name = name

    }

    register(){
        return `${this.name} is now registered`;
    }
}
const ruth = new Person(1,"Brad Traversy");
ruth.id=0
const prosper = new Person(2,"Mike Jordan");
prosper.id = 1
console.log(ruth, prosper);
console.log(ruth.register())
console.log(prosper.register())

//Subclasses
class Employee extends Person {
    position:string
    constructor(id:number, name:string, position:string){
        super(id,name)
        this.position=position;
    }
}
const emp = new Employee(3,'Shawn', 'Developer');
console.log(emp.name)
console.log(emp.register())

//Generics - Used to build resuable components

function getArray<T>(items:T[]):T[]{
    return new Array().concat(items);
}

let numArray = getArray<number> ([1,2,3,4])
let strArray = getArray<string>(['brad', 'John', 'Jill']);
numArray.push(0)
strArray.push("James Bond");
console.log(numArray);
console.log(strArray);

