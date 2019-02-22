function countLengthOfWords(sen) {
    let extra='&';
    let rs = sen.split('').concat(extra);
    let count = 0;
    let result = [];
    for (let i = 0; i < rs.length; i++) {
        rs[i] = rs[i].charCodeAt();
    }
    for (let j = 0; j < rs.length; j++) {
        if (rs[j] >= 65 && rs[j] <= 90 || rs[j] >= 97 && rs[j] <= 122) {
            count++;
        } else {
            result.push(count);
            count = 0;
        }
    }
    // code goes here  
    return result;
}

// keep this function call here 
console.log(countLengthOfWords("hach%hach&hach&hach"));                            
