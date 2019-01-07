const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json', 'utf-8'));
var reducer= data.reduce((age,obj,index,objs)=>{
    return age +=obj.age;
},0)
var average=reducer/data.length;
console.log(average);


