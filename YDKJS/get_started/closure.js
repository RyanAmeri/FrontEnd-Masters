function range(start, end) {
    const arr = [];
    if (end !== undefined) 
        return addToArray(start, end, arr);
    else 
        return (number) => addToArray(start, number, arr);
}

function addToArray(start, end, array) {
    for (let i = start; i<= end; i++) {
        array.push(i)
    }
    return array;
}

console.log(range(3,3));    // [3]
console.log(range(3,8));    // [3,4,5,6,7,8]
console.log(range(3,0));    // []

var start3 = range(3);
var start4 = range(4);

console.log(start3(3));     // [3]
console.log(start3(8));     // [3,4,5,6,7,8]
console.log(start3(0));     // []

console.log(start4(6));     // [4,5,6]