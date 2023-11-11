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
        
    }
    removeDuplicate ([2,5,5,88,7]);


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
        
    }
    primeNumber (5);


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


//11. Factorial of given number
    