function missingNumber(n, arr) {
    let totalSum = (n * (n+1)) / 2;
    let currentSum = arr.reduce((acc,curr) => acc+curr,0);
    return totalSum - currentSum;
}