let arr = [34, 5, 54, 23, 12, 61, 24, 86, 31];
let low = 0;
let high = arr.length - 1;

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}

function quickSort(arr, low, high) {
    if (low < high) {
        let pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

console.log("Quick Sort");
console.log("Time complexity:");
console.log("Worst Case: O(n^2) - occurs with the most unbalanced partitions, e.g., already sorted arrays.");
console.log("Average Case: O(n log n) - occurs with reasonably balanced partitions.");
console.log("Best Case: O(n log n) - occurs with perfectly balanced partitions.");
quickSort(arr, low, high);
console.log(arr);