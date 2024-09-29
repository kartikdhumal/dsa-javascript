let arr = [0, 3, 5, 0, 1, 0, 7, -4, 0];

function moveZeros(arr) {
    let first = arr.filter((ele) => ele !== 0);
    let second = arr.filter((ele) => ele === 0);
    return first.concat(second);
}

function moveZerosToEnd(arr) {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[index] = arr[i];
            index++;
        }
    }

    for (let i = index; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
}

console.log(moveZeros(arr));
console.log(moveZerosToEnd(arr));
