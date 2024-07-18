let arr = [100, 233, 655, 433, 546, 920, 1020];
let max = arr[0];

for (var i = 1; i <= arr.length - 1; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log("The maximum element is " + max);