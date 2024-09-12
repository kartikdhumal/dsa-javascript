let arr = [45, 76, 87, 42, 65, 23, 12, 78];
let val = 45;

function binarySearch(arr, val) {
    arr.sort((a, b) => a - b);
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

console.log("Binary Search");
console.log(binarySearch(arr, val));
console.log("Worst Case: O(log⁡n) - Occurs when the target is not found or is found after checking all possible positions.")
console.log("Average Case: O(log⁡n) - Occurs when the target is found on average after checking about log⁡(n)log(n) elements.");
console.log("Best Case: O(1) - Occurs when the target is the middle element of the array on the first comparison.");