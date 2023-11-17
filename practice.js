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