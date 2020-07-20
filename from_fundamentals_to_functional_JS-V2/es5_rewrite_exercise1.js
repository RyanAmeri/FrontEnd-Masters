// const add = function(a , b = 2){
//     console.log(arguments); //logs [3]
//     return a + b;
//  };
add(3); //5??

var add = function (a, b) {
  //   if (b === undefined) {
  //     b = 2;
  //   }

  b = b || 2;
  return a + b;
};
