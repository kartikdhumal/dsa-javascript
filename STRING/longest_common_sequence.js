var str = "ABCDGH";
var str2 = "AEDFHR";

function longestCommonSeq(str, str2) {
    let commonSeq = "";
    let found = false;
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < str2.length; j++) {
            if (str.charAt(i) === str2.charAt(j)) {
                commonSeq += str.charAt(i);
                found = true;
                break;
            }
        }
        if (!found) {
            return "No subsequence found";
        }
    }
    return commonSeq;
}

console.log(`Longest Common Sequence between ${str} and ${str2}`)
console.log(longestCommonSeq(str, str2));