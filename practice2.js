// object methods  

const obj = {a : 1, b : 2, c : 3};
const object = {
    firstName : 'Emma',
    secondName : 'Stone',
    age : '40',
    fullName : function (){
        return this.firstName + " " + this.secondName;
    }
};
console.log(object.fullName());

// object.keys()
const keys = Object.keys(obj);
console.log(keys);
// .forEach()

// Object.values()
const values = Object.values(obj);
console.log(values);

// Object.entries()
const entries = Object.entries(obj);
console.log(entries);

// Object.assign()

// Object.create()
const createdObj = Object.create(obj);

//closure
function x (){
    var a = 7 ;
    var d=30
    function y () {
        var b=10
        function z (){
            console.log (a,b)
        }
        z()
    }
    y();
}
x();

function x (){
    var a = 7;
    function y () {
        console.log (a);
    }
    a = 100;
    return y;
}
var z = x();
z();

const arr =[2,4,6,31,5,4] 

// forEach()
arr.forEach(function (param){
    console.log(param)
});

console.log('------------------------------------');

// for...of for arrays
console.log('for...of');
for (let elements of arr) {
    console.log(elements)
}

// for...in loop for Objects
for (let key in object) {
    console.log(key + ' : ' + object[key]);
}


// nested destructuring
const nestedObject = {
    firstName : 'Emma',
    secondName : 'Stone',
    age : '40',
    education : {
        hss : 'mmvhss',
        diploma : 'kgptc'
    }
}

const {education : {hss, diploma}} = nestedObject;
console.log(diploma);


// new Set() 
//  to create an array of unique elements or 
//     * remove the duplicates from an array *
const letters = new Set ([1, 5, 'm', 4, 1]);
console.log(letters);

const removedDuplicates = new Set(arr);
console.log(removedDuplicates);
// it can also use to add values to array which created by Set().
letters.add(13);
letters.add(7);
console.log(letters);
console.log(letters.values()) 


// new Map() 
const fruits = new Map([
    ['apples', 499],
    ['banana', 399],
    ['orange', 200]
])
console.log(fruits);
// add elements by using set() method;
fruits.set('mango', 499);
fruits.delete('banana')
console.log(fruits)
console.log(fruits.get('apples'));
console.log(fruits.has('orange'));

// Currying 
function currying(x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        }
    }
}
console.log(currying(1) (2) (3));


// Error Handling using try and catch
try {
    throw new Error("This is a deliberate error.");
  } catch (error) {
    console.log('An error occurred:', error.message);
  }
  
  // example for dybamic 
  var abcd = 'ajmal'
    console.log(abcd)
    abcd = 15;
    console.log(abcd);


// map ,filter,reduce
  const arr1 = [2,4,20,12]

  const sortedArr1 = arr1.sort((a, b) => a - b)
  console.log(sortedArr1);

  const mapArr1 = arr1.map(x => x * 2);
  console.log(mapArr1);

  const filterArr1 = arr1.filter(x => x > 2)
  console.log(filterArr1);

  const reduceArr1 = arr1.reduce((sum, val) => {
    return sum + val
  }, 0)
  console.log(reduceArr1)


  // call, apply, bind

  const person1 = {
    firstName : 'Emma',
    secondName : 'Stone',
    age : '40',
    
};
const fullName = function (place){
    console.log(this.firstName + " " + this.secondName + ' from ' + place) 
}

const person2 = {
    firstName : 'margot',
    secondName : 'robbie',
    age : '40',
    
};

// call()
fullName.call(person1, 'calicut')
fullName.call(person2);

// apply ()
fullName.apply(person1,['Kunnam kulam'])


// ********************************************************** //
//  Unit review  //

// Data types
// 1. Primitive Types
// 2. Non-primitive 

// non-primitive

const obj1 = { name: 'Jon' }
const obj2 = obj1;
obj2.name = 'Doe';
console.log(obj1, obj2)


// lexical scope
function outerFunction() {
    let outerVar = 'Outer';
    console.log('outer-1')

    function middleFunction() {
        let middleVar = 'Middle';
        console.log('inner-2')

        function innerFunction() {
            let innerVar = 'Inner';
            console.log(outerVar); // Accesses 'Outer'
            console.log(middleVar); // Accesses 'Middle'
            console.log(innerVar); // Accesses 'Inner'
        }

        innerFunction();
    }

    middleFunction();
}
  
outerFunction();

// closure
function closure () {
    let val = 1;
    function innerFunction () {
        // here val is getting incremented after the function is returned
        //  so whenever the function is called the output will always be incremented.
        // this is because of hoisting. the val will be stored even after the
        // outer function is getting executed. so that val will be incremented after returning it
        return val++ 
    }
    return innerFunction
}

const closureVal = closure()
console.log(closureVal())
console.log(closureVal())
console.log(closureVal())
console.log(closureVal())
console.log(closureVal())
console.log(closureVal())

// Currying
function add (x) {
    return function (y) {
        return x + y
    }
}

const addVal5 = add(5)
console.log('add:', addVal5(3))


// closure in the case of var and let variables
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 5000);
}

for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 5000);
}


// Object creating using constructor
function ConstructorFunction (name, age) {
    this.name = name
    this.age = age
}

const ajmal = new ConstructorFunction('ajmal', 23)
const jon = new ConstructorFunction('Jon', 45)
console.log('ajmal:', ajmal)
console.log('Jon:', jon)


// Call apply bind
let name = {
    firstName: 'Cristiano',
    secondName: 'Ronaldo',
    printFullName: function(country) {
        console.log(this.firstName, this.secondName, 'from', country)
    }
}

name.printFullName('Portugal')

const name2 = { 
    firstName: 'Leo',
    secondName: 'Messi'
}

// call
name.printFullName.call(name2, 'Argentina')

// apply
name.printFullName.apply(name2, ['Argentina'])

// bind
const bindFunction = name.printFullName.bind(name2, 'Argentina')
bindFunction()