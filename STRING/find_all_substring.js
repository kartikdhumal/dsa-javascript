let str = "abcd";

function findSubstring(str) {
    if (str.length == 1) return [str];
    let substrings = [];
    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j <= str.length; j++) {
            substrings.push(str.slice(i, j));
        }
    }
    return substrings;
}

console.log(`All substrings from ${str}`);
console.log(findSubstring(str));