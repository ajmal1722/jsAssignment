function swapValues() {
    let a = 3;
    let b = 'jon doe';

    // Swapping the values using array destructuring
    [a, b] = [b, a];

    console.log('a:', a); // a: 'jon doe'
    console.log('b:', b); // b: 3
}
swapValues()