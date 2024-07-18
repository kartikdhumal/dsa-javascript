let arr = [99, 765, 324, 654, 23, 54, 887, 32];
let k = 3;

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

function kthlargest(arr, k) {
    let largest;
    arr = bubbleSort(arr);
    largest = arr[arr.length - k];
    return largest;
}

function kthsmallest(arr, k) {
    let smallest;
    arr = bubbleSort(arr);
    smallest = arr[k];
    return smallest
}

console.log("The " + k + "th " + "largest element");
console.log(kthlargest(arr, k));

console.log("The " + k + "th " + "smallest element");
console.log(kthsmallest(arr, k));
