// function rotateMatrix(array) {
//     let num = array.length;
//     let value = 1;
    
//     let rowStart = 0;
//     let rowEnd = num - 1;

//     let colStart = num - 1;
//     let colEnd = 0;

//     while (rowStart <= rowEnd && colEnd <= colStart) {
//         for (i = rowStart; i <= rowEnd; i++) {
//             array[i][colStart] = value;
//             value++
//         }
//         colStart--;
//     }

//     return array;
// }

// console.log(rotateMatrix( [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]))
function rotateMatrix(array){
for (let i = 0; i < Math.floor(n/2); i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        [
            matrix[j][n-1-i],
            matrix[n-1-i][n-1-j],
            matrix[n-1-j][i],
            matrix[i][j]
        ]= [ 
            matrix[i][j],
            matrix[j][n-1-i],
            matrix[n-1-i][n-1-j],
            matrix[n-1-j][i]
        ];
    }
}return matrix
}
console.log(rotateMatrix[[1,2],[3,4]])