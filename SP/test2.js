// input abcdefxygh
// output - 8
// find continuos character

let str = "abcdefxyghzijkl";

function findContinuosChar(str) {
    str.split("").sort();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i + 1] > str[i]) {
            count++;
        }
    }
    return count;
}

console.log(findContinuosChar(str));