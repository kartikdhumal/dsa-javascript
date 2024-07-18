let str = "pandit"
let str2 = "guddupandit"


function isSubsequence(str, str2) {
    let i = 0;
    let j = 0;
    while (i < str.length && j < str2.length) {
        if (str[i] === str2[j]) {
            i++;
        }
        j++;
    }
    return i === str.length;
}

console.log(isSubsequence(str, str2) ? `${str} is a subsequence of ${str2}` : `${str} is not a subsequence of ${str2}`);