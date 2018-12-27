function R(n){
    var i,j;
    var x = 1;
    var A = [];
    var rs = [];
    for(let z = 0; z < (2*n - 1); z += 1){
        rs[z] = [];
    }
    for(i = 0; i < n; i += 1){
        A[i] = [];
        for(j = 0; j < n; j += 1){
            A[i][j] = x;
            x += 1;
            rs[i+j].push(A[i][j]);
        }
    }
    return rs;
}
console.log(R(3))