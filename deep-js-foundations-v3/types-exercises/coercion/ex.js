// TODO: write the validation functions

function stripWhiteSpace(input) {
  const regex = /\s/g;

  return input.replace(regex, "");
}

function isValidName(name) {
  let cleanName = undefined;
  if (typeof name === "string") cleanName = stripWhiteSpace(name);
  return name !== "" && typeof name === "string" && cleanName.length > 2;
}

function stringOrNum(input) {
  return typeof input === "string" || typeof input === "number";
}

function hoursAttended(attended, length) {
  let attendedNum = Number(attended);
  let lengthNum = Number(length);
  return (
    stringOrNum(attended) &&
    stringOrNum(length) &&
    attendedNum > 0 &&
    lengthNum > 0 &&
    Number.isInteger(attendedNum) &&
    Number.isInteger(lengthNum) &&
    attendedNum < lengthNum
  );
}

// tests:
console.log(isValidName("Frank") === true);
console.log(hoursAttended(6, 10) === true);
console.log(hoursAttended(6, "10") === true);
console.log(hoursAttended("6", 10) === true);
console.log(hoursAttended("6", "10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("", 6) === false);
console.log(hoursAttended(6, "") === false);
console.log(hoursAttended("", "") === false);
console.log(hoursAttended("foo", 6) === false);
console.log(hoursAttended(6, "foo") === false);
console.log(hoursAttended("foo", "bar") === false);
console.log(hoursAttended(null, null) === false);
console.log(hoursAttended(null, undefined) === false);
console.log(hoursAttended(undefined, null) === false);
console.log(hoursAttended(undefined, undefined) === false);
console.log(hoursAttended(false, false) === false);
console.log(hoursAttended(false, true) === false);
console.log(hoursAttended(true, false) === false);
console.log(hoursAttended(true, true) === false);
console.log(hoursAttended(10, 6) === false);
console.log(hoursAttended(10, "6") === false);
console.log(hoursAttended("10", 6) === false);
console.log(hoursAttended("10", "6") === false);
console.log(hoursAttended(6, 10.1) === false);
console.log(hoursAttended(6.1, 10) === false);
console.log(hoursAttended(6, "10.1") === false);
console.log(hoursAttended("6.1", 10) === false);
console.log(hoursAttended("6.1", "10.1") === false);
