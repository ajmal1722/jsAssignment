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

const arr =[2,4,6,31,5] 

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
