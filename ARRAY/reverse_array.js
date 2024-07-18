let arr = [10, 20, 30, 40, 50, 60];
let reversedArray = [];

for (var i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
}

console.log("Reversed array is : " + reversedArray);

// using formula

arr.reverse();
console.log("Reversed array is : " + arr);