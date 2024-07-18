let arr = [10, 20, 30, 40, 50, 60];
let k = 2;

function rotateArray(arr, dir, k) {
    if (dir === "left") {
        let newArr = arr.slice(k).concat(arr.slice(0, k));
        return newArr;
    }

    if (dir === "right") {
        let newArr = arr.slice(-k).concat(arr.slice(0, -k));
        return newArr;
    }
}

console.log("Original Array");

console.log(arr);

console.log(`Rotate by ${k} till right`);

console.log(rotateArray(arr, "right", k));

console.log(`Rotate by ${k} till left`);

console.log(rotateArray(arr, "left", k));