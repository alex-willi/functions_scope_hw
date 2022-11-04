// 1.1. What is the difference between a parameter and an argument?
// parameters are the names assigned to a function's arguments value.
// function example (parameters, parameter)
// example (arguments, argument)

// 1.2. Within a function, what is the difference between return and console.log?
// A console.log() Displays what is passed to it.
// A return ends the execution of a function and return a value.

// 1. 3. What are the implications of the ability of a function to return a value?
//A function does not need a return value. If a function has a return value return must be the last statement.

// 2. calculateCube
function calculateCube(num) {
    let cube = (num*num)*num
    return cube
    // YOUR CODE HERE
}
console.log(calculateCube(10))

// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HEREnode app.js

}

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
}

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
}

// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
}

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
}

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
}

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
}

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
}

// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
}

module.exports = {
    calculateCube,
    isAVowel,
    getTwoLengths,
    sumArray,
    checkPrime,
    printPrimes,
    printLongestWord,
    eulerFibo,
    findNeedle,
    sumPositive
};