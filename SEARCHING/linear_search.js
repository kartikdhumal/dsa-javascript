let arr = [3, 54, 65, 76, 87, 43, 3132, 674, 67, 4342, 642, 346];
let target = 3132;

function linearSearch(arr, target) {
    let found = false;
    let position;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            found = true;
            position = i;
            break;
        }
    }
    if (found) {
        console.log(`${target} found at position ${position}`);
    }
    else {
        console.log(`${target} not found`);
    }
}

console.log("Linear Search");
console.log("Time Complexity:");
console.log("Worst Case: O(n) - Occurs when the target is not found or is at the end of the array.");
console.log("Average Case: O(n) - Occurs when the target is found on average after checking about half of the elements.");
console.log("Best Case: O(1) - Occurs when the target is the first element in the array.");
linearSearch(arr, target);