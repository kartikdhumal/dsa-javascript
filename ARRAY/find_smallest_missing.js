var arr = [-1, 0, 1, 2, 3, 4, 6];

function findSmallestMissing(arr) {
    let ele = 1;
    arr = arr.filter(x => x > 0);
    arr.sort((a, b) => a - b);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == ele) {
            ele++;
        }
    }
    return ele;
}

console.log("The smallest Missing Positive integer is : " + findSmallestMissing(arr));