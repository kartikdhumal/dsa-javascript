let arr = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10, 12];

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


function maxLen(arr, n) {
    let maxLen = 0;
    let sumMap = new Map();
    let currentSum = 0;
    for (let i = 0; i < n; i++) {
        currentSum += arr[i];
        if (currentSum === 0) {
            maxLen = i + 1;
        }

        if (sumMap.has(currentSum)) {
            maxLen = Math.max(maxLen, i - sumMap.get(currentSum));
        } else {
            sumMap.set(currentSum, i);
        }
    }
    return maxLen;
}

console.log(maxLen([15, -2, 2, -8, 1, 7, 10, 23], 8));