var arr = [1, 2, 3, 4, 5, 6, 7, 9, 10];


function findMissing(arr) {
    let n = arr.length + 1;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;
    for (let num of arr) {
        actualSum += num;
    }

    let missingNum = expectedSum - actualSum;
    return missingNum;
}

console.log("Missing Number");
console.log(findMissing(arr));