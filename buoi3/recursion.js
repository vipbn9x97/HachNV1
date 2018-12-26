var isEven = function(num){
  num=Math.abs(num);
  if(num===0){
    return true;
  }
  else if(num===1){
    return false;
  }

    return isEven(num-2);
}
console.log(isEven(4));
console.log(isEven(75));
console.log(isEven(-1));