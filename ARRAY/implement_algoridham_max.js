var arr = [2, 4, 6, 87, 34, 23, 65];

function impleAlgoMax(arr) {
    if (arr.length < 2) return 0;
    let max = arr[1] - arr[0];

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if ((arr[j] - arr[i]) > max) {
                max = (arr[j] - arr[i]);
            }
        }
    }
    return max;
}

console.log("Maximum Diffrence");
console.log(impleAlgoMax(arr)); 