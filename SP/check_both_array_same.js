function check(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let freqMap1 = new Map();
    let freqMap2 = new Map();

    for (let num of arr1) {
        freqMap1.set(num, (freqMap1.get(num) || 0) + 1);
    }

    for (let num of arr2) {
        freqMap2.set(num, (freqMap2.get(num) || 0) + 1);
    }

    if (freqMap1.size !== freqMap2.size) {
        return false;
    }

    for (let [key, value] of freqMap1) {
        if (freqMap2.get(key) !== value) {
            return false;
        }
    }

    return true;
}