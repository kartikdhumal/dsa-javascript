var arr = [-1, 0, 1, 2, -1, -4];

function findUniqueTriplet(arr) {
    let newArr = [];
    let found = false;
    let count = 0;
    for (var i = 0; i < arr.length - 2; i++) {
        for (var j = i + 1; j < arr.length - 1; j++) {
            for (var k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    newArr.push([arr[i], arr[j], arr[k]]);
                    count++;
                    found = true;
                }
            }
        }
    }
    if (!found) {
        return "No triplet with 0 sum exists.";
    }
    else {
        return newArr;
    }
}

console.log("Unique triplet");
console.log(findUniqueTriplet(arr));