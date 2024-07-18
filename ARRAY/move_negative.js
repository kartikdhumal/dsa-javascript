let arr = [23, 56, 34, -1, -20, 30, -93];
let newArr = [];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        newArr.unshift(arr[i]);
    }
    else {
        newArr.push(arr[i]);
    }
}

console.log("Move negative character on starting");
console.log(newArr);