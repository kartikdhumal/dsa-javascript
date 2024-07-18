var str = "Motu aur patlu ki jodi";

function findLongestWord(str) {
    let strarr = str.split(" ");
    let longestWord = "";
    for (var i = 0; i < strarr.length; i++) {
        if (strarr[i].length > longestWord.length) {
            longestWord = strarr[i];
        }
    }
    return longestWord
}

console.log(findLongestWord(str));