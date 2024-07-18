// Kadane's algoridham
let arr = [-1, 2, 1, 0, -1, -2, 3];


function findContinuosSubarray(arr) {
    if (arr.length == 0) return 0;
    let maxEnd = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        maxEnd = Math.max(arr[i], maxEnd + arr[i]);
        max = Math.max(max, maxEnd);
    }
    return max;
}

console.log("Continous subarray sum is " + findContinuosSubarray(arr));

