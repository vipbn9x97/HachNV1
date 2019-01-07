const fs = require('fs');
var user=[];
const data = JSON.parse(fs.readFileSync('./JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json', 'utf-8'));
data.forEach(function(element){

    user.push(`${element.first_name} ${element.last_name} `)
    return user;
});
console.log(user)