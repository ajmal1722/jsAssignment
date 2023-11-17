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
