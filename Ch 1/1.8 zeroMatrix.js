/*

CTCI - 1.8

Zero Matrix
Write an algorithm such that if an element in an MxN matrix is 0, 
its entire row and column are set to 0.

I: Array
O: Array
C: Optimize
E: Empty

*/


// let zeroMatrix = (arr) => {
//     let row = 0;
//     while (row < arr.length - 1) {
//         row += 1;
//         for (let i = 0; i < arr.length; i++) {

//             for (let j = 0; j < arr[i].length; j++) {
//                 if (arr[i][j] == 0) {
//                     for (let a = 0; a <= arr.length; a++) {
//                         arr[i][a] = 0; 
                        
//                         for (let b = 0; b < arr[i].length - 1; b++) {
//                             arr[b][j] = 0;
//                         }
//                     }
//                 }
//                 console.log(arr, "BYE")
//             }
//             // row += 1;
//         }
//     }
//     // console.log(arr, "BYE")
// }

const zeroMatrix = m => {
    // First identify the rows and columns to be zeroed
    let rowsToZero = [];
    let colsToZero = [];
    let row = 0;
    while (row < m.length) {
        let col = 0;
        while (col < m[0].length) {
            if (m[row][col] === 0) {
                rowsToZero.push(row);
                colsToZero.push(col);
            }
            col += 1;
            // console.log(colsToZero, "COLUMNS")
        }
        console.log(rowsToZero, "ROWS")
        row += 1;
    }
    
    // Then zero the identified rows
    rowsToZero.forEach(function (rowToZero) {
        let col = 0;
        while (col < m[rowToZero].length) {
            m[rowToZero][col] = 0;
            col += 1;
        }
    });

    // Then zero the identified columns
    colsToZero.forEach(function (colToZero) {
        let row = 0;
        while (row < m.length) {
            m[row][colToZero] = 0;
            row += 1;
        }
    });

    return m;
}

console.log(
    zeroMatrix(
        [
            [1,0,3,4],
            [5,6,0,8],
            [9,10,11,12]
        ], "HI"
    )
)