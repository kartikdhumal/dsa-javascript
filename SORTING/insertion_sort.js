let arr = [34, 5, 54, 23, 12, 61, 24, 86, 31];

function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
    return arr;
}

console.log("Insertion sort");
console.log("Worst Case: O(n^2) - occurs when the array is sorted in reverse order.");
console.log("Average Case: O(n^2) - occurs with random order of elements.");
console.log("Best Case: O(n) - occurs when the array is already sorted.");
console.log(insertionSort(arr));