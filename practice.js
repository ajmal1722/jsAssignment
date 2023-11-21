// Ternary Operator (?):
let age = 23;
let message = (age >= 18) ? "you are an adult " : "you are a minor";
console.log(message);


// for in loop
const person = {fname:"John", lname:"Doe", age:25};

let text = '';
for (let x in person) {
    text = text + person[x];
}
console.log(text);



// Arrow functions
const arrowFunction = () => {
    console.log('Arrow function');
}
arrowFunction();


const arrowFunction2 = (param1,param2) => {
    return param1 + param2;
}
console.log(arrowFunction2 (5,4));


const oneParam = param => {
    console.log(param * param);
}
oneParam(5);

const oneLineFunction = () => console.log(3 + 5);
oneLineFunction();


// eventListners

const buttonElement = document.querySelector('.js-button');

const clickButton = () => {
console.log ('hello');
}

buttonElement.addEventListener('click',clickButton);

const hoverButton = () => {
    buttonElement.style.color = 'red';
    console.log('hi');
}
buttonElement.addEventListener('mouseenter',hoverButton);


// array creating using new keyword
const points = new Array (4,5,6,12,3)
console.log(points)


// .filter() 
const array1 = [29,-5,3,14,-3];

const filteredArray1 = array1.filter(item => item > 0);
console.log(filteredArray1);

// .map()
const changedArray1 = array1.map(item => item*10) 
console.log(changedArray1);


// array methods
const arr = [4,5,6,94,7,4,4,5,58,6,22,6,55,5,1]
console.log(arr.length);

const arrStringed = arr.toString(); //to convert it to string
console.log(arrStringed);

const arrJoined = arr.join(); // it can also convert to string.
console.log(arrJoined);  
const arrJoinedBySeparator = arr.join('*'); // you can add a 
console.log(arrJoinedBySeparator); //separator between each elements.

const arr2 = ['banana', 'apple', 'orange'];
const arr2Pop = arr2.pop();  // to remove last elements in an array
console.log(arr2Pop); // it'll return the value that poped out
console.log(arr2); // now arr2 have only 2 elements 

// const arr2Pushed = arr2.push('mango');
arr2.push('mango')
console.log(arr2);

// Shifting is equivalent to popping, but working on the first  
// element instead of the last.
const arr3 = ['banana', 'grape', 'orange'];
const arr3Removed = arr3.shift();
console.log(arr3);

// The unshift() method adds a new element to an array 
// (at the beginning), and "unshifts" older elements.
//const arr3Added = arr3.unshift('mango');
arr3.unshift('mango');
console.log(arr3);
console.log(arr3[1]); // it can access elements in an array

// The concat() method creates a new array by merging 
// (concatenating) existing arrays:
const girls = ['Lami', 'Katy'];
const boys = ['jon','Davis'];
const trans = ['Ani'];

const childern = girls.concat(boys); //Example (Merging Two Arrays)
console.log(childern);
const childernAll = girls.concat(boys,trans); //Example (Merging Three Arrays)
console.log(childernAll);

const child = girls.concat('jon'); //Example (Merging Three Arrays)
console.log(child);

// Flattening an array is the process of reducing the dimensionality of an array.

// The flat() method creates a new array with sub-array elements
// concatenated to a specified depth.
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits.splice(1,2);
console.log(fruits);
fruits.splice(1,0,'amal','jon');
console.log(fruits);

const veg = ['tomato','potato','onion','cucumber']
const vegSliced = veg.slice(1,3);
console.log(veg);
console.log(vegSliced);


// sorting of an array
let persons = ['Jon','Ellen','Rob','Eren','Katy','Amy'];
persons.sort();
console.log(persons);
persons.reverse();
console.log(persons)

let numbers = [1,6,3,7,5,9,4];
const numbersSorted = numbers.sort((a, b) => a - b);
console.log(numbersSorted);
numbers.sort((a, b) => b - a);
console.log(numbers);

// math.max.apply method for highest number in an array
function myArrayMax () {
   return Math.max.apply(null,numbers);
}
console.log(myArrayMax());

function myArrMin (){
    return Math.min.apply(null,numbers);
}
console.log(myArrMin());

// you can also write like this
function myArrMin1 (){
    return Math.min(2,4,5,6,7,78,3,99); 
}
console.log(myArrMin1());


// callback functions
setTimeout(() => {
    console.log('timer')
}, 3000);

setInterval(() => {
    console.log('Good Morning!!');
}, 5000);

console.log('hello');

function myFunction (param){
    console.log(param)
}
function x(){
    console.log('child-x')
}
function y() {
    myFunction('child-y')
}
x();
y();
function z(param1, callback){
    callback(param1);
}
z('ajmal',myFunction);


// this keyword
// method -> object
// function -> global (window,global)

const any = {
    name : 'ajmal',
    fun : function () {
        console.log(this);
    }
}
any.fun();

function globalFunction () {
    console.log(this);
}
globalFunction();

// closure
const objs = [{
    name : 'two',
    msg : 'I am two'
},
{
    name : 'three',
    msg : 'I am three'
}];

function main (){
    objs.forEach((item) => {
        const btn = document.createElement('button');
        btn.innerHTML = item.name;
        btn.onclick = getCallback(item.msg);
        document.body.appendChild(btn);
    })
}

function getCallback (arg){
    return function (){
        alert(arg)
    }
}

main();


// new element creation
const cre = [1,2,3];

function creation () {
    cre.forEach((item) => {
        const para = document.createElement('p');
        para.innerHTML = 'Hello World!';
        document.body.appendChild(para)
    })
}
creation();


function creation2 (){
    cre.forEach((item) => {
        const para1 = document.createElement('p');
        para1.innerHTML = 'Good Morning';
        document.body.appendChild(para1);
    })
}
creation2();


// Destructuring
let introduction = ['Hello', 'I', 'am', 'Ajmal'];
let [greetings,,, name] = introduction;

console.log(greetings);
console.log(name);

let [greeting, ...intro] = introduction;
console.log(greeting);
console.log(intro);

function getArray () {
    return ['Hello', 'I', 'am', 'Ajmal'];
}
let [, pronoun] = getArray();
console.log (pronoun);

// Swapping values using destructuring
let a = 3;
let b = 5;

[a, b] = [b, a];
console.log(a);
console.log(b);

// Object destructuring
let details = {name1 : 'ajmal' , country : 'India', job : 'Developer'};
let {name1, country, job} = details;
// let {name1, ...otehrs} = details;

console.log(name1);
console.log(job);
// console.log(otehrs);


// closure (group of lexical elements);
function ab() {
    let x= 10;
    function b() {
        let y =20;
        function c() {
            console.log(x+y);
        }
        c()
    }
    b()
}
ab();


//------------------------------------------------------------//

// function statement aka function declaration
function x () {
    console.log('x called');
}

// function expression
let y = function () {
    console.log('y called');
}