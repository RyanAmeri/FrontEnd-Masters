// Polyfill for `Object.is(..)`
Object.is = function ObjectIs(input1, input2) {
  //if one of the inputs is number
  if (typeof input1 === "number" || typeof input2 === "number") {
    // if they are both NaN, return true, reimplemeting Number.isNaN()
    if (isNaN(input1) && isNaN(input2)) return true;
    else if (isNegativeZero(input1) && !isNegativeZero(input2)) return false;
    else if (isNegativeZero(input2) && !isNegativeZero(input1)) return false;
  }
  //input are not -0 or NaN so we can use a normal ===
  return input1 === input2;
};

function isNegativeZero(num) {
  return num === 0 && 1 / num === -Infinity;
}

// tests:
console.log(Object.is(42, 42) === true);
console.log(Object.is("foo", "foo") === true);
console.log(Object.is(false, false) === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log(Object.is(-0, 0) === false);
console.log(Object.is(0, -0) === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(NaN, 0) === false);
console.log(Object.is(42, "42") === false);
console.log(Object.is("42", 42) === false);
console.log(Object.is("foo", "bar") === false);
console.log(Object.is(false, true) === false);
console.log(Object.is(null, undefined) === false);
console.log(Object.is(undefined, null) === false);
