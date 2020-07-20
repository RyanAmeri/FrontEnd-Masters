import { _ } from "./_.js";

const list1 = _.from("this", "is", "one", true, 5);
const list2 = _.es5from("this", "is", "one", true, 5);
console.log(list1);
console.log(list2);
