var arr = [10, 35, 47, 22, 23];
var target = 45;

function numberSubarray(arr, target) {
    let newArr = [];
    let count = 0;
    for (var i = 0; i < arr.length; i++) {
        let currentsum = 0;
        for (let j = i; j < arr.length; j++) {
            currentsum += arr[j];
            if (currentsum === target) {
                newArr.push([arr[i], arr[j]]);
                count++;
            }
        }
    }
    return count;
}

console.log("The number of subarray");
console.log(numberSubarray(arr, target));