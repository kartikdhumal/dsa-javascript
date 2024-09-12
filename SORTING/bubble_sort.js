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
console.log("Time complexity:");
console.log("Worst Case: O(n^2) - occurs when the array is sorted in reverse order.");
console.log("Average Case: O(n^2) - occurs with random order of elements.");
console.log("Best Case: O(n) - occurs with an optimized version when the array is already sorted.")
console.log(bubbleSort(arr));