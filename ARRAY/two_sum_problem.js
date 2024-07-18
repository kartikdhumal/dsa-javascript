var arr = [32, 54, 76, 98, 43, 33, 6, 8, 4, 257, 65, 335];
let target = 300;

function two_sum(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log("Element are " + two_sum(arr, target));