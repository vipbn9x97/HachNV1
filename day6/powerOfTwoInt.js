function powerOfTwoInt(inputUser){
    for(let i=2;i<20;i++){
        for(let j=1;j<20;j++){
        if(inputUser==Math.pow(i,j)){
            return true;
        }

        }

    }
    return false;
}
console.log(powerOfTwoInt(30));