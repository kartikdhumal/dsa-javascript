// it is also known as dutch national flag problem which sort array in 0(n) using three pointers low,mid,high

var arr = [0, 1, 0, 2, 1, 2,];


function sort0s1s2s(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1
    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        }
        else if (arr[mid] === 1) {
            mid++;
        }
        else if (arr[mid] === 2) {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
    return arr;
}

console.log("Sort using 0(n)");
console.log(sort0s1s2s(arr));