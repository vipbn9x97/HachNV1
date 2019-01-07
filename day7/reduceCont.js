const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json', 'utf-8'));
// task 1
var user=[];
data.reduce((element,obj,index,objs)=>{
    user.push(`${obj.first_name} ${obj.last_name} `)
    return user;
})
console.log(user);
// task 2
var userFilter = data.reduce(function(element,obj){
    if(obj.age>40 && obj.gender=='Male'){   
        element.push(obj)}
    return element}
,[]);
console.log(userFilter);
// task 4

function renameKeys(obj, newKeys) {
    const keyValues = Object.keys(obj).map(key => {
        const newKey = newKeys[key] || key;
        return { [newKey]: obj[key] };
    });
    return Object.assign({}, ...keyValues);
}

const newKeys = { first_name: "firstName", last_name: "lastName" };

var resultEx4 = data.reduce((accumulator, currentValue) => {
    accumulator.push(renameKeys(currentValue,newKeys));
    return accumulator; // ko ddc return ma co method
}, []);

console.log(resultEx4);