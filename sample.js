//Assignment questions

// 1. Maximum element in an array
    function maxElement (array){
        
        let max = array[0];

        for (let i = 0; i < array.length; i++){
            if ( array[i] > max)
            max = array[i];
        }
        console.log (`maximum element of an array is : ${max}`);
    }
    maxElement([1,5,15,9,10,18,-20])
// const myArray = [3, 8, 1, 6, 2, 5];
// maxElement(myArray);


// 2. Reverse of a string
    function  reverseString(string){
        
    }

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
        console.log(sortedArray);
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
        console.log (sum);
    }
    sumEven (10);