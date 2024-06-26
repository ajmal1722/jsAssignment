function swapValues() {
    let a = 3;
    let b = "jon doe";

    // Swapping the values using array destructuring
    [a, b] = [b, a];

    console.log("a:", a); // a: 'jon doe'
    console.log("b:", b); // b: 3
}
// swapValues()

// function findCount (arr) {
//     let count = {}
//     arr.map(item => {
//         console.log('count:', count[item]);
//         if (count[item]) count[item]++
//         else{
//             count[item] = 1;
//         }
//     })
//     console.log(count)
// }

function findCount(arr) {
    let count = arr.reduce((acc, val) => {
        acc[val] ? acc[val]++ : (acc[val] = 1);
        return acc;
    }, {});
    console.log(count);
}
// findCount(['one', 'two', 'two', 'two', 'three', 'three'])

// function printNumbers (num) {
//     for(var i = 1; i < num; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000);
//     }
// }

// function printNumbers (num) {
//     for(let i = 0; i <= num; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000);
//     }
// }

function printNumbers(num) {
    for (var i = 0; i <= num; i++) {
        function x(i) {
            setTimeout(() => {
                console.log(i);
            }, i * 1000);
        }
        x(i);
    }
}

printNumbers(4);
