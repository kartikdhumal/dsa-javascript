let arr = [100, 233, 655, 433, 546, 920, 1020];
let ele = 1020;
let exists = false;

for (var i = 1; i <= arr.length - 1; i++) {
    if (arr[i] == ele) {
        exists = true;
        break;
    }
}

if (exists) {
    console.log(ele + " exists in the array");
}
else {
    console.log(ele + " doesn't exist in the array");
}