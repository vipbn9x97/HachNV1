const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json', 'utf-8'));
var rs=[];
function mapMethod(arr,mapFunc){
    for(i of arr){
        i=mapFunc(i);
        rs.push(i);
    }
    return rs;
}
function funcMap(i){
    return i+5;
}
console.log(mapMethod([1,2,3,4],funcMap))