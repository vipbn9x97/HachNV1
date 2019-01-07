const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json', 'utf-8'));
var user = data.filter(element=>element.age>40 && element.gender=='Male');
console.log(user);