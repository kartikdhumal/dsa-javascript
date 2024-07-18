let arr = [23, 23, 45, 45, 18, 18, 12, 12, 70];
let newArr = [];

for (var i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (var j = 0; j < newArr.length; j++) {
        if (arr[i] === newArr[j]) {
            isDuplicate = true;
            break;
        }
    }
    if (!isDuplicate) {
        newArr.push(arr[i]);
    }

}


// for (var i = 1; i <= arr.length - 1; i++) {
//     if (!newArr.includes(arr[i])) {
//         newArr.push(arr[i]);
//     }
// }

console.log("After removing duplicates");
console.log(newArr);