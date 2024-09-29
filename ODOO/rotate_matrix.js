let arr = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];

let arr2 = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12]];

function rotateMatrix(arr) {
    let rotatedMatrix = [];
    for (let i = 0; i < arr.length; i++) {
        let rotatedRow = [];
        for (let j = 0; j < arr.length; j++) {
            rotatedRow.push(arr[j].pop());
        }
        rotatedMatrix.push(rotatedRow);
    }
    return rotatedMatrix;
}


// console.log("Expected output");
// console.log("3 6 9")
// console.log("2 5 8")
// console.log("7 8 9")
console.log(rotateMatrix(arr));
console.log(rotateMatrix(arr2));