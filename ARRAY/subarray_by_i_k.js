var arr = [10, 35, 47, 22, 23];
var k = 4;

function subArrayWithK(arr, k) {
    let newArr = [];
    for (let i = 0; i <= arr.length - k; i++) {
        newArr.push(arr.slice(i, i + k));
    }
    return newArr;
}

console.log(subArrayWithK(arr, k));