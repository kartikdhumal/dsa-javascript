var arr = [23, 43, 54, 86, 23, 43];

function longestIncreasing(arr) {
    if (arr.length === 0) return 0;
    let dp = new Array(arr.length).fill(1);
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

console.log("Length of longest increasing subsequence");
console.log(longestIncreasing(arr))