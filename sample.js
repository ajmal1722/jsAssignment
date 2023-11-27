//Assignment questions

// 1. Maximum element in an array
    function maxElement (array){
        
        let max = array[0];

        for (let i = 0; i < array.length; i++){
            if ( array[i] > max)
            max = array[i];
        }
        console.log (`1: maximum element of an array is : ${max}`);
    }
    maxElement([1,5,15,9,10,18,-20])
// const myArray = [3, 8, 1, 6, 2, 5];
// maxElement(myArray);


// 2. Reverse of a string
    function  reversedString(inputString){
        const splitString = inputString.split('');
        const arrayReversed = splitString.reverse();
        const arrayJoint = arrayReversed.join('')
        console.log (`2: ${arrayJoint}`);
    }
    reversedString ('Hello!');


// 3. Array in ascending order
    function arrayAscending(array){
        
        let sortedArray = [];

        for (let i = 0; i < array.length; i++){
            for (let j = i + 1; j < array.length; j++){
                if (array[i] > array[j]){
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
            sortedArray.push(array[i])
        }
        console.log(`3: ${sortedArray}`);
    }
    
arrayAscending([45,5,7,5,8,9,78,36,22,13]);


// 4. Sum of all even numbers between 1 and n.
    function sumEven (n) {
        let sum = 0;
        for (let i = 1; i < n; i++){
            if (i % 2 ===0){
                sum += i;
            }
        }
        console.log (`4: ${sum}`);
    }
    sumEven (10);


// 5. Checking given number is prime
    function primeNumberCheck (number) {
        let flag = 0;
        for (i = 2; i < number; i++){
            if (number % i === 0){
                flag = 1;
                break;
            }
        }
        if (flag === 0){
            console.log (`5: ${number} is a prime number`);
        } else {
            console.log (`5: ${number} is not a prime number`);
        }
    }
    primeNumberCheck(7);


// 6. Second largest number in an array
    function secondLargest (inputArray) {
        const sortedArray = inputArray.sort((a, b) => b - a);
        console.log (`6: Second largest of an array is ${sortedArray[1]}`)
    }
    secondLargest([5,6,7,,1,8,5,36,2,4,49,4,5,15,92]);


// 7. Remove duplicates of an array
    function removeDuplicate (inputArray){
        const uniqueSet = new Set(inputArray);
        const uniqueArray = Array.from(uniqueSet);
        console.log('7: ', uniqueArray)
    }
    removeDuplicate ([2,5,5,88,7,2,4]);


// 8. Calculate  sum of elements in an array
    function sumArray (inputArray) {
        let sum = 0;
        for (let i = 0; i < inputArray.length; i++){
            sum += inputArray[i];
        }
        console.log (`8: sum = ${sum}`);
    }
    sumArray ([1, 2, 3, 4, 5]);


// 9. Generate prime numbers
    function primeNumber (number){
        if (number < 2) {
            return false;
        }

        for (let i = 2; i < number; i++){
            if (number % i === 0) {
                return false;
            } 
        } 
        return true;
    }
    function generatePrime (limit) {
        let primeArray = [];
        for (let i = 2; i < limit; i++) {
            if (primeNumber(i)){
                primeArray.push(i);
            }
        }
        console.log (`9: Prime Numberes are ${primeArray}`)
    }
    generatePrime (10);


// 10. Maximum and minimum value
    function maxAndMin (inputArray){
    let max;
    let min;
    
        const maxValue = inputArray.sort ((a , b) => b - a);
        max = inputArray[0]; 
   
        const minValue = inputArray.sort ((a , b) => a - b);
        min = inputArray[0];

        console.log (`10: max = ${max} and min = ${min}`)
    }

    maxAndMin ([5,8,7,6,3,15,88,45,13]);


// 11. Factorial of given number
    function factorial (number) {
        let sum = 1;
        for (let i = 1; i <= number; i++){
           sum = sum * i;
        }
        console.log (`11: factorial of ${number} = ${sum}`);
    }
    factorial (5)


// 12. Checking a string it's palindrome or not
    function palindromeCheck (inputString){
        const stringlLowerCased = inputString.toLowerCase();
        const stringReversed = stringlLowerCased.split('').reverse().join('');

    if (stringlLowerCased === stringReversed) {
        console.log(`12: "${inputString}" is a palindrome`);
    } else {
        console.log(`12: "${inputString}" is a not a palindrome`);
    }

    // console.log(stringReversed);
    // console.log(inputString);
    }
    palindromeCheck ('Madam');
    

// 13. Checking Armstrong number or not
    function checkArmstrong (num) {
        const numToString = String(num).split('');
        const numToArray = numToString.map(Number);

        const armstrong = numToArray.reduce(function(acc, curr){
            acc = acc + curr ** numToArray.length;
            return acc
        }, 0);

        if (armstrong === num){
            console.log(`13: ${num} is an Armstrong Number`);
        }
        else {
            console.log(`13: ${num} is not an Armstrong`);
        }
    }
    checkArmstrong (153);


// 14. Print Fibonacci series
    function fibonacciSeries (number) {
        let fib =[0, 1] ;
        for (let i = 2; i < number; i++){
            nextTerm = fib[i - 2] + fib[i - 1];
            fib.push(nextTerm);
        }
        console.log (`14: Fibonacci series are ${fib}`);
    }
    fibonacciSeries (10)


// 15. Sum of prime numbers
    const num = 10;
    function generatePrimeNum (limit) {
        let primeArray = [];
        for (let i = 2; i < limit; i++) {
            if (primeNumber(i)){
                primeArray.push(i);
            }
        }
        return primeArray;
    }
    
    function primeNumberSum (number) {
       const sum = generatePrimeNum(number).reduce((acc, val) => acc + val)
        console.log(`15: sum of all prime Numbers upto ${num} = ${sum}`)
    }
    primeNumberSum(num);


// 16. Sum of all multiple of 5
    function sumOfMultiple (number) {
        let sum = 0;
        for (let i = 3; i <= number; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        console.log (`16: sum of all the multiple of 3 and 5 = ${sum}`);
    }
    sumOfMultiple (5);


// 17.Sum of all the even number
    function sumEvenNumbers (n) {
        let sum = 0;
        for (let i = 1; i < n; i++){
            if (i % 2 ===0){
                sum += i;
            }
        }
        console.log (`17: ${sum}`);
    }
    sumEvenNumbers (10);


// 18. Union of array of integers
    function union () {
        const array1 = [1,2,3,4];
        const array2 = [3,4,5,6,7,8]

        const unionSet = new Set ([...array1,...array2]);
        const unionArray = Array.from(unionSet);

        console.log('18: ', unionArray);
    }
    union();


// 19. Sm of digits of a given number
    function sumOfDigits (number) {
        const numToArray = String(number).split('').map(Number);
        const sum = numToArray.reduce((acc, curr) => acc + curr);
        console.log(`19: sum of digits = ${sum}`);
    }
    sumOfDigits(23457);


// 20. Count the no.of vowels in a string
    function vowelCount (str) {
        const string = str.toLowerCase().split('');
        const vowels =['a', 'e','i','o','u'];

        const totalVowels = string.reduce((acc, curr) => {
            if (vowels.includes(curr)){
                acc++
            }
            return acc;
        }, 0)
        console.log(`20: Vowel count = ${totalVowels}`);
    }
    vowelCount('hello world');