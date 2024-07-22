let arr = [34, 65, 87, 73, 23, 36, 86, 15, 11, 72, 5, 14, 19, 82, 73, 54, 36];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log("Bubble Sort");
console.log(bubbleSort(arr));