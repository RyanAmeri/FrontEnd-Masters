function printHello() {
  console.log("Hello");
}
function blockFor1Sec() {
  const array = [];
  for (let i = 0; i < 30000000; i++) {
    array.push(i);
  }
  console.log("Array insertion finisheds");
}
setTimeout(printHello, 0);
blockFor1Sec();
console.log("Me first!");
