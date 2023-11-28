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