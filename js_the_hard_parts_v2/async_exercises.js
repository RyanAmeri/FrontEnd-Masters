//Exercises taken from http://csbin.io/async

/* CHALLENGE 1 */
/* 
Thinking point (no writing code necessary for this challenge): Inspect the code given to you in Challenge 1. In what order should the console logs come out? Howdy first or Partnah first?
*/

function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}
// After thinking it through, uncomment the following line to check your guess!
// Ryan's Note: Output should be "Partnah" and then "Howdy"
//testMe(); // what order should these log out? Howdy or Partnah first?

/*   CHALLENGE 2 */
/* 
Create a function delayedGreet that console logs welcome after 3 seconds.
*/

function delayedGreet() {
  setTimeout(() => console.log("welcome"), 3000);
}
// Uncomment the following line to check your work!
//delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 
Create a function helloGoodbye that console logs hello right away, and good bye after 2 seconds.
*/

function helloGoodbye() {
  console.log("hello");
  setTimeout(() => console.log("good bye"), 3000);
}
// Uncomment the following line to check your work!
//helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 
Create a function brokenRecord that console logs hi again every second. Use the End Code button to stop the console logs when you are satisfied that it is working.
*/

function brokenRecord() {
  function printHi() {
    console.log("hi again");
  }
  setInterval(printHi, 1000);
}

// Uncomment the following line to check your work!
//brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 
Create a function limitedRepeat that console logs hi for now every second, but only for 5 seconds. Research how to use clearInterval if you are not sure how to do this.
*/

function limitedRepeat() {
  function printHi() {
    console.log("hi again");
  }
  function clear() {
    clearInterval(id);
  }
  console.log("hi again");
  const id = setInterval(printHi, 1000);
  setTimeout(clear, 5000);
}
// Uncomment the following line to check your work!
//limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 
Write a function called everyXsecsForYsecs that will accept three arguments: a function func, a number interval, and another number duration.

everyXsecsForYsecs will execute the given function every interval number of milliseconds, but then automatically stop after duration milliseconds.

Then pass the below sayHi function into an invocation of everyXsecsForYsecs with 1000 interval time an 5000 duration time.
What do you expect to happen?

*/

function everyXsecsForYsecs(func, interval, duration) {
  const id = setInterval(func, interval * 1000);
  function clear() {
    clearInterval(id);
  }
  setTimeout(clear, duration * 1000);
}
// Uncomment the following lines to check your work!
function theEnd() {
  console.log("This is the end!");
}
//everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!

/* CHALLENGE 7 
Write a function delayCounter that accepts a number (called 'target') as the first argument and a number of milliseconds (called 'wait') as the second argument, and returns a function.

When the returned function is invoked, it should log to the console all of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.
*/

function delayCounter(target, wait) {
  function closureFn() {
    let i = 1;
    const id = setInterval(() => {
      console.log(i);
      i++;
      if (i > target) clearInterval(id);
    }, wait);
  }
  return closureFn;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const countLogger = delayCounter(3, 1000);
countLogger();
//After 1 second, log 1
//After 2 seconds, log 2
//After 3 seconds, log 3

/* CHALLENGE 8 */

function promised(val) {
  // ADD CODE HERE
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const createPromise = promised('wait for it...');
// createPromise.then((val) => console.log(val));
// will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */

class SecondClock {
  constructor(cb) {
    // ADD CODE HERE
  }
  // ADD METHODS HERE
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const clock = new SecondClock((val) => { console.log(val) });
// console.log("Started Clock.");
// clock.start();
// setTimeout(() => {
//     clock.reset();
//     console.log("Stopped Clock after 6 seconds.");
// }, 6000);

/* CHALLENGE 10 */

function debounce(callback, interval) {
  // ADD CODE HERE
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// function giveHi() { return 'hi'; }
// const giveHiSometimes = debounce(giveHi, 3000);
// console.log(giveHiSometimes()); // -> 'hi'
// setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'
