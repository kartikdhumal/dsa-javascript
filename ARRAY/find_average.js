let arr = [100, 233, 655, 433, 546, 920, 1020];
let sum = 0;
let n = arr.length;

for (var i = 1; i <= arr.length - 1; i++) {
    sum += arr[i];
}

avg = sum / n;

console.log("The average of all element is " + avg.toFixed(2));