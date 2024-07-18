var arr = [1, 3, 5, 7, 9];
var arr2 = [2, 4, 6, 8, 10, 12];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function findmedian(arr, arr2) {
    let newArr = arr.concat(arr2);
    newArr = bubbleSort(newArr);

    if (newArr.length % 2 !== 0) {
        return newArr[Math.floor(newArr.length / 2)];
    }
    else {
        return (newArr[newArr.length / 2 - 1] + newArr[newArr.length / 2]) / 2;
    }
}

console.log("Median " + findmedian(arr, arr2))