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


// .filter() -
const array1 = [29,-5,3,14,-3];

const filteredArray1 = array1.filter(item => item > 0);
console.log(filteredArray1);

// .map()
const changedArray1 = array1.map(item => item*10) 
console.log(changedArray1);

