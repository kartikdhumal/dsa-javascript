function lenOfLongSubarr(arr, n, K) {
    const sum_index_map = {};
    let maxLen = 0;
    let prefix_sum = 0;

    for (let i = 0; i < n; i++) {
        prefix_sum += arr[i];

        if (prefix_sum === K) {
            maxLen = i + 1;
        }

        else if (sum_index_map.hasOwnProperty(prefix_sum - K)) {
            maxLen = Math.max(maxLen, i - sum_index_map[prefix_sum - K]);
        }

        if (!sum_index_map.hasOwnProperty(prefix_sum)) {
            sum_index_map[prefix_sum] = i;
        }
    }

    return maxLen
}