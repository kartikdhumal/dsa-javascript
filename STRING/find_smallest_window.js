let str = "munna bhai mbbs na bhai";
let val = "nba";

function findsmallestwindow(str, val) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let substring = str.slice(i, j + 1);
            if (containsAllChars(substring, val)) {
                result.push(substring);
            }
        }
    }

    let smallest = result.reduce((min, current) =>
        current.length < min.length ? current : min, result[0]);

    return smallest;
}

function containsAllChars(substring, val) {
    for (let char of val) {
        if (!substring.includes(char)) {
            return false;
        }
    }
    return true;
}

console.log("Find smallest window");
console.log(findsmallestwindow(str, val));