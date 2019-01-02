function arrayToList(array){
    let num = array.shift();
    if(num === undefined){
      return null
    }
    else return{
        value: num,
        rest: arrayToList(array)
    }
}

console.log(arrayToList([10,20]));
function listToArray(rest){
    let array = [];
    while(rest !== null){
        array.push(rest.value);
        rest = rest['rest'];
    }
    return array;
}
console.log(listToArray(arrayToList([10, 20, 30])));
function prepend(value, rest){
    return {
        value: value,
        rest: rest
    }
}

console.log(prepend(10, prepend(20, null)));

function nth(rest,i){

    return listToArray(rest)[i];
    
}
console.log(nth(arrayToList([10, 20, 30]), 1));