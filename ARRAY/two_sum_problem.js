var arr = [32, 54, 76, 98, 43, 33, 6, 8, 4, 257, 65, 335];
let target = 37;

function two_sum(arr, target) {
    let mymap = new Map();
    for (let i = 0; i < arr.length; i++) {
        let comb = target - arr[i];
        if (mymap.has(comb)) {
            return [arr[i], comb];
        }

        mymap.set(arr[i], i);
    }
}

console.log("Element are " + two_sum(arr, target));