function remove_duplicate(arr) {
    let j = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] != arr[j]) {
            arr[j + 1] = arr[i];
            j++;
        }
    }
    return j + 1;
}

[0, 1, 1]


return Array.from(new Set(arr));