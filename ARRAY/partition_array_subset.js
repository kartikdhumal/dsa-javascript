var arr = [5, 1, 11, 5];
var arr2 = [1, 2, 3, 5];

function checkPartition(arr) {
    let totalSum = arr.reduce((acc, curr) => acc + curr, 0);
    if (totalSum % 2 != 0) {
        return false;
    }

    let target = totalSum / 2;
    const dp = Array(target + 1).fill(false);
    dp[0] = true;
    for (let ele of arr) {
        for (let i = target; i >= ele; i--) {
            dp[i] = dp[i] || dp[i - ele];
        }
    }

    if (!dp[target]) {
        return false;
    }

    let subset1 = [];
    let subset2 = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] <= target && dp[target - arr[i]]) {
            subset1.push(arr[i]);
            target -= arr[i];
        }
        else {
            subset2.push(arr[i]);
        }
    }
    return [subset1, subset2];
}

console.log(checkPartition(arr));