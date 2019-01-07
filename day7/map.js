const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json', 'utf-8'));
var user = data.map(element=>`${element.first_name} ${element.last_name}`);
console.log(user)