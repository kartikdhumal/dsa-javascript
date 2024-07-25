let arr = [34, 5, 54, 23, 12, 61, 24, 86, 31];

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let smallest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        
        let temp = arr[smallest];
        arr[smallest] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

console.log("Selection sort");
console.log(selectionSort(arr));