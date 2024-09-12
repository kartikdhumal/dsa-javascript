// if we want to return value
function twoSum(arr, target) {
    let myset = new Set();
    for (let i = 0; i < arr.length; i++) {
        let temp = target - arr[i];
        if (myset.has(temp)) {
            return [arr[i], temp];
        }
        myset.add(arr[i]);
    }
}

console.log(twoSum([1, 4, 45, 6, 10, 8], 16));

// If we want to return index

let mymap = new Map();
for (let i = 0; i < nums.length; i++) {
    let comb = target - nums[i];
    if (mymap.has(comb)) {
        return [mymap.get(comb), i];
    }
    mymap.set(nums[i], i);
}