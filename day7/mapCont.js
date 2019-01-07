const fs = require('fs');

var arrData = JSON.parse(fs.readFileSync('./JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json', {encoding:'utf8'}));

function renameKeys(obj, newKeys) {
    const keyValues = Object.keys(obj).map(key => {
        const newKey = newKeys[key] || key;
        return { [newKey]: obj[key] };
    });
    return Object.assign({}, ...keyValues);
}

const newKeys = { first_name: "firstName", last_name: "lastName" };

var result = arrData.map(user => renameKeys(user,newKeys));

console.log(result)