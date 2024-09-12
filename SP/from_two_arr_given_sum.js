function allPairs(x, arr1, arr2) {
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    
    let pairs = [];
    let i = 0, j = arr2.length - 1;

    // Use two pointers to find pairs
    while (i < arr1.length && j >= 0) {
        let sum = arr1[i] + arr2[j];
        
        if (sum === x) {
            pairs.push([arr1[i], arr2[j]]);
            i++;
            j--;
        } else if (sum < x) {
            i++;
        } else {
            j--;
        }
    }

    return pairs;
}