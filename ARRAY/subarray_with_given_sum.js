let arr = [23, 45, 12, 48, 52, 60, 30];
let target = 100;

function subarray_sum(arr, target) {
    let sum = 0;
    let start = 0;
    let found = false;
    for (end = 0; end < arr.length; end++) {
        sum += arr[end];

        while (sum > target && start <= end) {
            sum = sum - arr[start];
            start++;
        }

        if (sum === target) {
            console.log(`Target found between ${start} and ${end}`);
            found = true;
            break;
        }
    }
    if (!found) {
        console.log("No subarray found");
    }
}

subarray_sum(arr, target);
