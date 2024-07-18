var arr = [2, 4, 1, 3, 5, 6, 3, 2, 9];

function findInversion(arr) {
    let newArr = [];
    let count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            newArr.push([arr[i], arr[i + 1]]);
            count++;
        }
    }
    return count;
}

console.log("Number of inversions in array");
console.log(findInversion(arr));