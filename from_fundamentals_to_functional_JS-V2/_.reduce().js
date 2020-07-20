import { _ } from "./_.js";
const res = _.reduce(
  [1, 2, 3, 4, 5],
  function (sum, n) {
    return sum + n;
  },
  0
);
console.log(res);
const res2 = _.reduce(
  { a: 1, b: 2, c: 1 },
  function (result, value, key) {
    (result[value] || (result[value] = [])).push(key);
    return result;
  },
  {}
);

console.log(res2);
