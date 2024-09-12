var arr = [6, 4, 7, 8, 8, 12, 11, 43, 65, 23, 12];


function secondLargest(arr) {
    arr = [...new Set(arr)];
    for (let i = 0; i <= arr.length - 1; i++) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
    return arr[arr.length - 2];
}

function secondLargestElement(arr) {
    let first = null;
    let second = null;

    for (const num of arr) {
        if (first === null || num > first) {
            second = first;
            first = num;
        } else if (num !== first && (second === null || num > second)) {
            second = num;
        }
    }

    return second === null ? null : second;
}

console.log("Second Largest Element");
console.log(secondLargest(arr));
console.log(secondLargestElement(arr));