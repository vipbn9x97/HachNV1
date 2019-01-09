function repBin(n){
    var bin=[];
    if(n<0){
        return false;
    }
    while(n>0){
        let i=n%2;
        bin.push(i);
        n=Math.floor(n/2);
    }
    return repbin=bin.reverse().join('');
    }
    console.log(repBin(125))