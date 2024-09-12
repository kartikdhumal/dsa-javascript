let arr = [34, 5, 54, 23, 12, 61, 24, 86, 31];
let low = 0;
let high = arr.length - 1;

function merge(arr, low, mid, high) {
    let n1 = mid - low + 1;
    let n2 = high - mid;

    let L = new Array(n1);
    let R = new Array(n2);

    for (let i = 0; i < n1; i++)
        L[i] = arr[low + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    let i = 0;
    let j = 0;
    let k = low;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(arr, low, high) {
    if (low < high) {
        let mid = low + Math.floor((high - low) / 2);
        mergeSort(arr, low, mid);
        mergeSort(arr, mid + 1, high);
        merge(arr, low, mid, high);
    }
}

console.log("Merge Sort");
console.log("Time complexity:");
console.log("Worst Case: O(n log n)");
console.log("Average Case: O(n log n)");
console.log("Best Case: O(n log n)");
mergeSort(arr, low, high);
console.log(arr);
