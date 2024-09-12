function kthSmallest(arr, k) {
    arr =  Array.from(new Set(arr));
    arr.sort((a,b) => a-b);
    return arr[k-1];
}