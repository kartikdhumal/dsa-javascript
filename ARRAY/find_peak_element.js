var arr = [34, 65, 76, 87, 22, 54, 65];

function findPeakElement(arr) {
    if (arr.length == 0) return 0;
    if (arr.length == 2) return arr[0] >= arr[1] ? 0 : 1;

    for (let i = 0; i < arr.length; i++) {
        if ((i == 0 || arr[i] >= arr[i - 1]) && (i == arr.length - 1 || arr[i] >= arr[i + 1])) {
            return arr[i];
        }
    }

    return -1;
}

console.log("Peak Element is " + findPeakElement(arr));