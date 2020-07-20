// var increment = function(n){ return n + 1; };

const increment = (n) => n++;

// var square = function(n){ return n*n; };

const square = (n) => n * n;

// var doMathSoIDontHaveTo = function(n, func){ return func(n); };

const doMathSoIDontHaveTo = (n, func) => func(n);

doMathSoIDontHaveTo(5, square);

doMathSoIDontHaveTo(4, increment);
