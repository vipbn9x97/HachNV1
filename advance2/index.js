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

// function identity(x){
//     return x;
// }
// console.log(identity(4));

//2.2

// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// function mul(a,b){
//     return a*b;
// }

// 2.3
// function identifyf(x){
//     return function(){
//         return x
//     };
// } ;
// var four = identifyf(4);
// console.log(four());

// 2.4

// function addf(x) {
//     return function(y) {
//       return x + y;
//     }
//   }
  
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
  addf(3)(4) //=> 7
  liftf(mul)(5)(6) //=> 30

// 2.6


