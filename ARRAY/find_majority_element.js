const arr1 = [2, 2, 3, 4, 2, 2, 5];

function findMajority(arr) {
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > n / 2) {
            return arr[i];
        }
    }
    return null;
}

console.log("Majority element");
console.log(findMajority(arr1));
