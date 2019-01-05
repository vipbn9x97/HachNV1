function R(n){
    var x = 1;
    var result = [];
    for(let z = 0; z < (2*n - 1); z += 1){
        result[z] = [];
    }
    for(i = 0; i < n; i ++){
        for(j = 0; j < n; j ++){ 
            result[i+j].push(x);
            x += 1;
        }
    }
    return result;
}
console.log(R(5))