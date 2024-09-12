function binarysearch(arr, k) {
    let beg = 0;
    let end = arr.length - 1;
    while (beg <= end) {
        let mid = Math.floor((beg + end) / 2);
        if (arr[mid] === k) {
            return mid;
            break;
        }
        else if (arr[mid] > k) {
            end = mid - 1;
        }
        else {
            beg = mid + 1;
        }
    }
    return -1;
}