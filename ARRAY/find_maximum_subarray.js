var arr = [5, 4, -1, 7, 8];
let k = 3;

function max_subarray(arr, k) {
    let max = 0;

    for (var i = 0; i <= arr.length - k; i++) {
        let currentsum = 0;
        for (var j = i; j < i + k; j++) {
            currentsum += arr[j];
        }

        if (currentsum > max) {
            max = currentsum;
        }
    }
    return max;
}

console.log("Maximum subarray sum");
console.log(max_subarray(arr, k));