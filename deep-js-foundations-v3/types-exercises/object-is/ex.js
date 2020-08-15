// TODO: define polyfill for `Object.is(..)`
Object.is = function ObjectIs(input1, input2) {
  if (typeof input1 === "number" || typeof input2 === "number") {
    if (isNaN(input1) && isNaN(input2)) return true;
    else if (1 / input1 === -Infinity && 1 / input2 !== -Infinity) return false;
    else if (1 / input2 === -Infinity && 1 / input1 !== -Infinity) return false;
    else return input1 === input2 ? true : false; //input are not -0 or NaN so we can use a normal ===
  } else {
    // Inputs are not numbers so we can use a normal ===
    return input1 === input2 ? true : false;
  }
};

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
