
    // Function to find the sum of contiguous subarray with maximum sum.
   function maxSubarraySum(arr) {
        let maxSum = arr[0];
        let currentSum = arr[0];

        for (let i = 1; i < arr.length; i++) {
            currentSum = Math.max(arr[i], currentSum + arr[i]);
            maxSum = Math.max(maxSum, currentSum);
        }

        return maxSum;
    }

    console.log(maxSubarraySum([10,20,30,40,50]))