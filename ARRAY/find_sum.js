let arr = [100, 233, 655, 433, 546, 920, 1020];
let sum = 0;

for (var i = 1; i <= arr.length - 1; i++) {
    sum += arr[i];
}

console.log("The sum of all element is " + sum);