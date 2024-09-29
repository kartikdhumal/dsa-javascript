let arr = [2, 3, -8, 7, -1, 2, 3];

function maximumSub(arr) {
    let max = -Infinity;
    let maxArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            let subarr = arr.slice(i, j);
            let sum = subarr.reduce((acc, curr) => acc + curr);
            if (sum > max) {
                max = sum;
                maxArr = subarr;
            }

        }
    }
    return maxArr;
}


console.log(maximumSub(arr));