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

    if (letter == "a" || letter== "e" ||letter== "i" ||letter== "o" ||letter== "u"){
        return true
    }else{
        return false
    }
    // YOUR CODE HEREnode app.js
}
console.log(isAVowel("a"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    let myArry = []
    myArry.push(word1.length)
    myArry.push(word2.length)
    return myArry
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray
function sumArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i += 1){
        sum += arr[i]
    }
    return sum;
    // YOUR CODE HERE
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));
// 6.1 checkPrime
function checkPrime(num) {
    for (i = 2; i <= num; i ++){
        if (num % i === 0 || num % 3 === 0 || num % 5 ===0){
        return false
    }else{
        return true
    }
    // YOUR CODE HERE
}
}


// 6.2 printPrimes
function printPrimes(num) {
    for (let i = 2; i <= num; i++) {
        if (checkPrime(i)){
        console.log(i)
        }
    }
    // YOUR CODE HERE
}
num = 53;
printPrimes(num)

// 7. printLongestWord
function printLongestWord(arr) {
    let longest = arr[0].length;
    let solution = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let maxi = arr[i].length;
        if (maxi > longest) {
            solution = arr[i];
    
        }
    }
    return solution;
    // YOUR CODE HERE
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

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