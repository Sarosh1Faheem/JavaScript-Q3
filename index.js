// Task 1

function countCharacters(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}
const result = countCharacters("hello world");
console.log(result);

// Task 2

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0;
    let b = 1;
    let result;

    for (let i = 2; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
    }

    return result;
}


console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2)); 
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(10));

// Task 3

function sortNumbers(arr) {
    return arr.slice().sort((a, b) => a - b);
}

const numbers = [5, 3, 8, 1, 2];
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers);

console.log(numbers);
