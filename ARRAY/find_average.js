let arr = [100, 233, 655, 433, 546, 920, 1020];
let n = arr.length;

let sum = arr.reduce((acc, curr) => {
    return acc + curr;
})

let avg = sum / arr.length;


// console.log("The average of all element is " + avg.toFixed(2));
console.log("The average of all element is " + avg.toFixed(2));