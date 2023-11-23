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