function twoSum(nums, target) {
    let numObj = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (numObj[complement] !== undefined) {
            return [numObj[complement], i];
        }
        numObj[nums[i]] = i;
    }
}


let nums = [2, 11, 7, 15];
let target = 9;
console.log(twoSum(nums, target));