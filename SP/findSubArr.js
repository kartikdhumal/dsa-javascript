function findSubarray(arr, n) {
    let prefixSum = 0;
    let count = 0;
    let prefixSums = new Map();

    prefixSums.set(0, 1);

    for (let i = 0; i < n; i++) {
        prefixSum += arr[i];

        if (prefixSums.has(prefixSum)) {
            count += prefixSums.get(prefixSum);
        }

        prefixSums.set(prefixSum, (prefixSums.get(prefixSum) || 0) + 1);
    }
    return count;
}

