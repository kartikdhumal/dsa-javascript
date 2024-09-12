function peakElement(arr, n) {
    if (n === 1) return 0;
    for (let i = 0; i < n; i++) {
        if ((i === 0 && arr[i] >= arr[i + 1]) || (i === n - 1 && arr[i] >= arr[i - 1]) || (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1])) {
            return i;
        }
    }
    return -1;
}