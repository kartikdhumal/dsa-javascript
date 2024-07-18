let arr = [10, 30, 20, 50, 15];
let arr2 = [140, 109, 147, 133, 171, 105];


function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}


function mergeSortedArray(arr1, arr2) {
    arr1 = bubbleSort(arr1);
    arr2 = bubbleSort(arr2);
    let newArr = arr1.concat(arr2);
    return newArr;
}

console.log("Sorted Array after merging both array");
console.log(mergeSortedArray(arr, arr2));
