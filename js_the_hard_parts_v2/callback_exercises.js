//http://csbin.io/callbacks
// Type JavaScript here and click "Run Code" or press Ctrl + s
//console.log("Hello, world!");

// Challenge 1
/* 
Create a function addTwo that accepts one input and adds 2 to it.
*/
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
/* 
Create a function addS that accepts one input and adds an "s" to it.
*/
function addS(word) {
  return word + "s";
}

// uncomment these to check your work
//console.log(addS("pizza"));
//console.log(addS("bagel"));

// Challenge 3
/* 
Create a function called map that takes two inputs:
an array of numbers (a list of numbers)
a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
*/
function map(array, callback) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i]));
  }
  return newArr;
}

//console.log(map([1, 2, 3], addTwo));

// Challenge 4
/* 
The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.
*/
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

// see for yourself if your forEach works!
let alphabet = "";
const letters = ["a", "b", "c", "d"];
forEach(letters, function (char) {
  alphabet += char;
});
//console.log(alphabet);

// Challenge 5
/* 
In the first part of this challenge, you're going to rebuild map as mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop.
*/
function mapWith(array, callback) {
  const newArr = [];
  forEach(array, (item) => {
    newArr.push(callback(item));
  });
  return newArr;
}

//console.log(mapWith([1, 2, 3], addTwo));

// Challenge 6
/* 
The function reduce takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
*/

function reduce(array, callback, initialValue) {
  initialValue = initialValue ?? array[0];
  forEach(array, (item) => {
    initialValue = callback(initialValue, item);
  });
  return initialValue;
}
const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
//console.log(reduce(nums, add, 0)); //-> 8

// Challenge 7
/* Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!
 */
function intersection(...arrays) {
  //this works because if acc is not provided as a param, it is set to the first array. So in subsequent calls we just filter the arrays
  // to return items that were included in the accum array
  return arrays.reduce((acc, array) => {
    return array.filter((item) => acc.includes(item));
  });
}
/*
console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
);
// should log: [5, 15]
*/
// Challenge 8
/* 
Construct a function union that compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS: Use reduce!
*/
function union(...arrays) {
  return arrays.reduce((acc, array) => {
    const newItem = array.filter((item) => !acc.includes(item));
    return acc.concat(newItem);
  });
}

//console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
/* 
Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.
*/
function objOfMatches(array1, array2, callback) {
  return array2.reduce((res, value, index) => {
    if (value === callback(array1[index])) {
      res[array1[index]] = value;
    }
    return res;
  }, Object.create(null));
}
/* 
console.log(
  objOfMatches(
    ["hi", "howdy", "bye", "later", "hello"],
    ["HI", "Howdy", "BYE", "LATER", "hello"],
    function (str) {
      return str.toUpperCase();
    }
  )
);
*/
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
/* 
Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.
*/
function multiMap(arrVals, arrCallbacks) {
  return arrVals.reduce((accum, item) => {
    accum[item] = arrCallbacks.map((fn) => fn(item));
    return accum;
  }, Object.create(null));
}
/*
console.log(
  multiMap(
    ["catfood", "glue", "beer"],
    [
      function (str) {
        return str.toUpperCase();
      },
      function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function (str) {
        return str + str;
      },
    ]
  )
);
*/
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
/* 
Construct a function objectFilter that accepts an object as the first parameter and a callback function as the second parameter. objectFilter will return a new object. The new object will contain only the properties from the input object such that the property's value is equal to the property's key passed into the callback.
*/
function objectFilter(obj, callback) {
  const newObj = Object.create(null);
  for (let [key, value] of Object.entries(obj)) {
    if (
      Object.prototype.hasOwnProperty.call(obj, key) &&
      callback(key) === value
    )
      newObj[key] = value;
  }
  return newObj;
}
/* 
const cities = {
  London: "LONDON",
  LA: "Los Angeles",
  Paris: "PARIS",
};
console.log(objectFilter(cities, (city) => city.toUpperCase()));
*/
// Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
/* Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.
 */
function majority(array, callback) {
  let trueCount = 0;
  let falseCount = 0;
  array.forEach((item) => {
    callback(item) ? trueCount++ : falseCount++;
  });
  return trueCount > falseCount ? true : false;
}

// /*** Uncomment these to check your work! ***/
/*
const isOdd = function (num) {
  return num % 2 === 1;
};
console.log(majority([1, 2, 3, 4, 5, 7, 9, 11], isOdd));
// should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
*/
// Challenge 13
/* 
Create a function prioritize that accepts an array and a callback. The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.
*/
function prioritize(array, callback) {
  return array.reduce((accum, item) => {
    callback(item) ? accum.unshift(item) : accum.push(item);
    return accum;
  }, []);
}

// /*** Uncomment these to check your work! ***/
/*
const startsWithS = function (str) {
  return str[0] === "s" || str[0] === "S";
};
console.log(
  prioritize(
    ["curb", "rickandmorty", "seinfeld", "sunny", "friends"],
    startsWithS
  )
);

// should log: ["seinfeld", "sunny", "curb", "rickandmorty", "friends"];
*/
// Challenge 14
/* 
Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be the number of times that particular return value was returned.
*/

function countBy(array, callback) {
  return array.reduce((obj, item) => {
    let result = callback(item);
    obj[result] ? (obj[result] = obj[result] + 1) : (obj[result] = 1);
    return obj;
  }, Object.create(null));
}

// /*** Uncomment these to check your work! ***/
/*
console.log(
  countBy([1, 2, 3, 4, 5], function (num) {
    if (num % 2 === 0) return "even";
    else return "odd";
  })
); // should log: { odd: 3, even: 2 }
*/
// Challenge 15
/* 
Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.
*/
function groupBy(array, callback) {
  return array.reduce((obj, item, index, arr) => {
    let res = callback(item);
    obj[res] = arr.filter((element) => parseInt(element) === parseInt(res));
    return obj;
  }, Object.create(null));
}

// /*** Uncomment these to check your work! ***/
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
  return Math.floor(num);
};
//console.log(groupBy(decimals, floored));
// should log: { 1: [1.3], 2: [2.1, 2.4] }

// Challenge 16
/* 
Create a function goodKeys that accepts an object and a callback. The callback will return either true or false. goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback.
*/
function goodKeys(obj, callback) {
  const arr = [];
  for (let [key, value] of Object.entries(obj)) {
    if (callback(value)) arr.push(key);
  }
  return arr;
}

// /*** Uncomment these to check your work! ***/

const sunny = {
  mac: "priest",
  dennis: "calculating",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog",
};
/*
const startsWithBird = function (str) {
  return str.slice(0, 4).toLowerCase() === "bird";
};
console.log(goodKeys(sunny, startsWithBird));
*/
// should log: ['charlie', 'dee']

// Challenge 17
/* 
Create a function commutative that accepts two callbacks and a value. commutative will return a boolean indicating if the passing the value into the first function, and then passing the resulting output into the second function, yields the same output as the same operation with the order of the functions reversed (passing the value into the second function, and then passing the output into the first function).
*/
function commutative(func1, func2, value) {
  return func1(func2(value)) === func2(func1(value)) ? true : false;
}

// /*** Uncomment these to check your work! ***/
/*
const multBy3 = (n) => n * 3;
const divBy4 = (n) => n / 4;
const subtract5 = (n) => n - 5;
console.log(commutative(multBy3, divBy4, 11));
// should log: true
console.log(commutative(multBy3, subtract5, 10));
// should log: false
console.log(commutative(divBy4, subtract5, 48));
// should log: false
*/
// Challenge 18
/* 
Create a function objFilter that accepts an object and a callback. objFilter should make a new object, and then iterate through the passed-in object, using each key as input for the callback. If the output from the callback is equal to the corresponding value, then that key-value pair is copied into the new object. objFilter will return this new object.
*/

function objFilter(obj, callback) {
  const newObj = Object.create(null);
  for (let [key, value] of Object.entries(obj)) {
    if (value === callback(parseInt(key))) newObj[key] = value;
  }
  return newObj;
}

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = (n) => n / 2;
// console.log(objFilter(startingObj, half));
// should log: { 2: 1, 6: 3 }

// Challenge 19
/* 
Create a function rating that accepts an array (of functions) and a value. All the functions in the array will return true or false. rating should return the percentage of functions from the array that return true when the value is used as input.
*/
function rating(arrOfFuncs, value) {
  let trueCnt = arrOfFuncs.reduce((accum, fn) => {
    if (fn(value)) accum++;
    return accum;
  }, 0);
  return (trueCnt / arrOfFuncs.length) * 100;
}

// /*** Uncomment these to check your work! ***/
// const isEven = (n) => n % 2 === 0;
// const greaterThanFour = (n) => n > 4;
// const isSquare = (n) => Math.sqrt(n) % 1 === 0;
// const hasSix = (n) => n.toString().includes("6");
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

// Challenge 20
/* 
Create a function pipe that accepts an array (of functions) and a value. pipe should input the value into the first function in the array, and then use the output from that function as input for the second function, and then use the output from that function as input for the third function, and so forth, until we have an output from the last function in the array. pipe should return the final output.
*/
function pipe(arrOfFuncs, value) {
  return arrOfFuncs.reduce((accum, fn) => {
    return fn(accum) || fn(value);
  }, "");
}

// /*** Uncomment these to check your work! ***/
// const capitalize = (str) => str.toUpperCase();
// const addLowerCase = (str) => str + str.toLowerCase();
// const repeat = (str) => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, "cat"));
// // should log: 'CATcatCATcat'

// Challenge 21
/* 
Create a function highestFunc that accepts an object (which will contain functions) and a subject (which is any value). highestFunc should return the key of the object whose associated value (which will be a function) returns the largest number, when the subject is given as input.
*/
function highestFunc(objOfFuncs, subject) {
  let largest = Number.NEGATIVE_INFINITY;
  let rightKey = undefined;
  for (let [key, fn] of Object.entries(objOfFuncs)) {
    if (fn(subject) > largest) {
      largest = fn(subject);
      rightKey = key;
    }
  }
  return rightKey;
}

// /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = (n) => n * 2;
// groupOfFuncs.addTen = (n) => n + 10;
// groupOfFuncs.inverse = (n) => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// Challenge 22
/* 
Create a function, combineOperations, that takes two parameters: a starting value and an array of functions. combineOperations should pass the starting value into the first function in the array. combineOperations should pass the value returned by the first function into the second function, and so on until every function in the array has been called. combineOperations should return the final value returned by the last function in the array.
*/
function combineOperations(startVal, arrOfFuncs) {
  return arrOfFuncs.reduce((accum, fn) => {
    return fn(accum);
  }, startVal);
}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

function multiplyFive(num) {
  return num * 5;
}

function addTen(num) {
  return num + 10;
}

// // /*** Uncomment these to check your work! ***/
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10

// Challenge 23
/* 
Define a function myFunc that takes an array and a callback. myFunc should pass each element from the array (in order) into the callback. If the callback returns true, myFunc should return the index of the current element. If the callback never returns true, myFunc should return -1;
*/

function myFunc(array, callback) {
  return array.findIndex(callback);
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOddAgain(num) {
  return num % 2 !== 0;
}
/*
// /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOddAgain)); // Output should be 1
// console.log(myFunc(evens, isOddAgain)); // Output should be -1

// Challenge 24
/* Write a function myForEach that accepts an array and a callback function. Your function should pass each element of the array (in order) into the callback function. The behavior of this function should mirror the functionality of the native .forEach() JavaScript array method as closely as possible.
 */
function myForEach(array, callback) {
  for (let item of array) {
    callback(item);
  }
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

// /*** Uncomment these to check your work! ***/
// const nums2 = [1, 2, 3];
// myForEach(nums2, addToSum);
// console.log(sum); // Should output 6
