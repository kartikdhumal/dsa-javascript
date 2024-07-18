let arr = [45, 76, 87, 42, 65, 23, 12, 78];
let val = 45;

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

function binarySearch(arr, val) {
    arr = bubbleSort(arr);
    let beg = 0;
    let end = arr.length - 1;

    while (beg <= end) {
        let mid = Math.floor((beg + end) / 2);
        if (arr[mid] == val) {
            return `${val} found at index ${mid}`;
        }
        else if (arr[mid] > val) {
            end = mid - 1;
        }
        else {
            beg = mid + 1;
        }
    }
    return `Value ${val} not found`;
}

console.log(binarySearch(arr, val));