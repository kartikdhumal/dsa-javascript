let arr = [4, 65, 32, 87, 988, 43, 24, 24, 24, 65, 764, 314, 534];
let count = 0;
let elem = 24;

for (var i = 1; i <= arr.length - 1; i++) {
    if (arr[i] === elem) {
        count++;
    }
}

console.log("Total occurence of " + elem + " are " + count);