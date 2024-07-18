var arr = [10, 30, 20, 50, 70, 40, 60];

function shuffleArray(arr) {
    let newArr = [...arr];

    for (var i = arr.length - 1; i > 0; i--) {
        let randomindex = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[randomindex]] = [newArr[randomindex], newArr[i]];
    }
    return newArr;
}

console.log("Orignal array")
console.log(arr);
console.log("Shuffled Array");
console.log(shuffleArray(arr));