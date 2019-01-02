function reverseArray(arr){
  var newArr = [];
  for (var i = arr.length - 1; i >= 0; i--){
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
function reverseArrayInPlace(arrayValue){
  for (var i = 0; i <= (arrayValue.length / 2); i++){
    let temp = arrayValue[i];
    arrayValue[i] = arrayValue[arrayValue.length - 1 - i];
    arrayValue[arrayValue.length - 1 - i] = temp;
  }
  return arrayValue;
}
console.log(reverseArrayInPlace(arrayValue));