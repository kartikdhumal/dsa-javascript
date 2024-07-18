let str = "banana";

function longestRepeatingSubstring(str) {
    if (str.length <= 1) return "";

    let longest = "";

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let substring = str.slice(i, j);
            if (str.indexOf(substring, j) !== -1 && substring.length > longest.length) {
                longest = substring;
            }
        }
    }

    return longest;
}

console.log(`Longest repeating substring is `);
console.log(longestRepeatingSubstring(str));