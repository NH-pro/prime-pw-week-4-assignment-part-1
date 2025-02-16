console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return name;
}
// Remember to call the function to test
console.log(helloName('Neil'));


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log(addNumbers(2, 4));

// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  return num1 * num2 * num3;
}
console.log(multiplyThree(2,3,4));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let array1 = ['firstItem', 'secondItem', 'lastItem'];
let emptyArray = [];

function getLast( array ) {
  if (array.length > 0){
    return array[array.length - 1];
  }
}
console.log('Should show last item:',getLast(array1));
console.log('Should show undefined:',getLast(emptyArray));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
let array2 = ['a', 'b', 'c', 'd'];

function find(value, array){
  for (let item of array){
    if (value === item){
      return true;
    }
  }
  return false;
}
console.log('Should say true:',find('b', array2));
console.log('Should say flase:',find('f',array2));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  for (let first of string){
    if (letter === first){
      return true;
    }
    else {
      return false;
    }
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let array3 = [1, 2, 3, 4];

function sumAll( array ) {
  let sum = 0
// TODO: loop to add items
  for (let number of array){
    sum = number + sum;
  }
  return sum;
}
console.log(sumAll(array3));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let allNumberArray = [-3, -2, -1, 0, 1, 2, 3];
let negNumberArray = [-3, -2, -1, 0];

function newArrayMaker (array){
  let newArray = [];
  for (let number of array){
    if (number > 0){
      newArray.push(number);
    }
  }
  return newArray;
}
console.log('Should show a new array with only positive numbers:',newArrayMaker(allNumberArray));
console.log('Should show a new array that is empty:',newArrayMaker(negNumberArray));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// CODE DESCRIPTION:

// Figure out why this code won't run properly:
// Function multiply(a, b){
//    a * b
// }

// Answer: The code would not run properly because it could not return any answer.
function multiply(a, b){
  return a * b;
}
console.log('Should show 20:',multiply(2, 10));