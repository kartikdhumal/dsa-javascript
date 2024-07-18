let arr = [100, 233, 655, 433, 546, 920, 1020];
let min = arr[0];

for (var i = 1; i <= arr.length - 1; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log("The minimum element is " + min);