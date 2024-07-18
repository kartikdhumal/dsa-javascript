var arr = [10, 20, 40, 55, 56, 57, 30];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function longestConsective(arr) {
    if (arr.length === 0) return 0;
    var length = 1;
    var maxlength = 1;
    arr = bubbleSort(arr);
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1] + 1) {
            length++;
        }
        else {
            if (length > maxlength) {
                maxlength = length;
            }
            length = 1;
        }
    }

    if (length > maxlength) {
        maxlength = length;
    }
    return length;
}

console.log("Find longest consective sequence");
console.log(longestConsective(arr))