// 1.1

// function empty(o) {
//     o = null;
//     return o;
// }

// var x = [];
// empty(x);
// console.log(x); // ??

// x = []

// 1.2
// function swap(a, b) {
//     [a, b] = [b, a];
//   }
  
//   var x = 1;
//   var y = 2;
  
//   swap(x, y);
//   console.log(x); // ??
  // x= 1

// 2.1

function identity(x){
    return x;
}
// console.log(identity(4));

//2.2

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}

// 2.3
function identifyf(x){
    return function(){
        return x
    };
} ;
var four = identifyf(4);
// console.log(four());

// 2.4

function addf(x) {
    return function(y) {
      return x + y;
    }
  }
  
//  console.log(addf(3)(4));
 
// 2.5

function liftf(cal) {
    return function(x) {
      return function(y) {
        return cal(x, y);
      };
    };
  }
  
  addf = liftf(add);
  // console.log(addf(3)(4)) //=> 7
  // liftf(mul)(5)(6) //=> 30

// 2.6

function curry(cal,x){
    return function(y){
      return cal(y,x);
    };
}
add3=curry(add,3);
// console.log(add3(4)) //=> 7
// console.log(curry(mul, 5)(6)) //=>30

// 2.7

// way 1

var inc = curry(add, 1); // TODO;
// console.log(inc(5)); // 6
// console.log(inc(inc(5))); // 7

// way 2

var inc = addf(1); // TODO;
// console.log(inc(5)); // 6
inc(inc(5)); // 7

// way 3

var inc = liftf(add)(1);
// console.log(inc(5))
// console.log(inc(inc(5)))

// 2.8

console.log(add(11, 11)); // 22
function twice(cal){
  return function(x){
    return cal(x,x);
  }
}
var doubl = twice(add);
// console.log(doubl(11)); // 22
var square = twice(mul);
// console.log(square(11)); // 121

// Ex 2.9
function reverse(fn) {
  return (num1,num2) => fn(num2, num1); 
}

// Ex 2.10

function composeu(fn1, fn2) {
  return num => fn2(fn1(num));
}

// Ex 2.11
function composeb(fn1, fn2) {
  return (num1, num2, num3) => fn2(fn1(num1, num2), num3)
}

// Ex 2.12
let limitVal;
function limit(fn, num) {
  limitVal = num;
  return (num1, num2) => {
      if (limitVal <= num) {
          limitVal++;
          return fn(num1, num2);
      } 
      return undefined;
  }
}

// Ex 2.13
let a;
function from(num) {
  a = num
  return () => {
      return a++;
  }
}

// Ex 2.14
function to(fn, endVal) {
  let count = fn();
  return () => {
      count++;
      if (count > endVal) {
          return undefined;
      }
      return fn() - 1;
  };
}

// Ex 2.15
function fromTo(num1, num2) {
  return () => {
      if (num1 < num2) {
          return num1++;
      } else {
          return undefined;
      }
  }
}

// Ex 2.16
function element(arr, fn) {
  return () => {
      return arr[fn() + 1];
  }
}

// Ex 2.17
let count17 = 0;
function element2(arr, fn) {
  if (fn !== undefined) {
      return () => {
          return arr[fn() + 1];
      }
  } else {
      return () => {
          count17++;
          return arr[count17 - 1];
      }
  }
}

// Ex 2.18
let result18 = [];
function collect(fn, array) {
  return () => {
      let val = fn();
      array.push(val);
      return val;
  }
}

// Ex 2.19
let val;
function filter(fn1, fn2) {
  return () => {
      let val = fn1();
      if (fn2(val)) {
          return val;
      } else {
          val = fn1()
          return val;
      }
  }
}

// Ex 2.20
function concat(fn1, fn2) {
  
  return () => {
      let res = fn1();    
      if (res !== undefined) {
          return res;
      } else {
          res = fn2();
          return res;
      }
  }
}

