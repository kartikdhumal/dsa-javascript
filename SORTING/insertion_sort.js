let arr = [34, 5, 54, 23, 12, 61, 24, 86, 31];

function insertionSort(arr) {
    let j;
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];

        for (j = i; j > 0 && arr[j - 1] > temp; j--)
            arr[j] = arr[j - 1];

        arr[j] = temp;

    }
    return arr;
}

console.log("Insertion sort");
console.log(insertionSort(arr));