let arr = [1, 3, 4, 5, 6, 8, 7, 9];
let arr2 = [3, 4, 5, 6];

function checkSubset(arr, arr2) {
    let isSubset = true;
    for (let i = 0; i < arr2.length; i++) {
        let found = false;
        for (let j = 0; j < arr.length; j++) {
            if (arr2[i] === arr[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            isSubset = false;
            break;
        }
    }

    if (isSubset) {
        console.log("Array A is a subset of B");
    } else {
        console.log("Array A is not a subset of B");
    }
}

checkSubset(arr, arr2);