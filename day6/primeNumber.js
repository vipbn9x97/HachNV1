function verifyPrime(inputUser){
    if(inputUser==2 || inputUser==3){
        return true;
    }
    for(let i=2;i<20;i++){
        for(let j=2;j<20;j++){
        if(inputUser==i*j){
            return false;
        }

        }

    }
    return true;
}
function primeNumber(inputUser){
    let res = [];
    for(let a=2;a<=inputUser;a++){
        if(verifyPrime(a)){
            res.push(a);
        }
    }
    return res;
}
console.log(primeNumber(5))