let nums = [5, 4, -1, 7, 8];


var maxSubArray = function (nums) {
    let maxSum = nums[0];
    let maxEndingHere = nums[0];

    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSum = Math.max(maxSum, maxEndingHere);
    }

    return maxSum;
};

console.log("All SubArrAys");
console.log(maxSubArray(nums));