let arr = [34, 5, 54, 23, 12, 61, 24, 86, 31];

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let smallest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }

        let temp = arr[smallest];
        arr[smallest] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

console.log("Selection sort");

console.log("Time complexity:");
console.log("Worst Case: O(n^2) - occurs with any initial order of elements.");
console.log("Average Case: O(n^2) - regardless of initial order, the algorithm performs quadratic comparisons.");
console.log("Best Case: O(n^2) - even if the array is already sorted, the algorithm performs quadratic comparisons.");
console.log(selectionSort(arr));