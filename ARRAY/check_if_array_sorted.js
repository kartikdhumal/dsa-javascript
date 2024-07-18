let arr = [10, 20, 30, 40, 50, 70, 70];

function isArraySorted(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(isArraySorted(arr) ? "The array is sorted" : "The array is not sorted");