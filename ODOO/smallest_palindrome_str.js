let str = "mylevelislol";

function isPalindrome(s) {
    if (s.length <= 2) return false;
    return s === s.split('').reverse().join('');
}

function smallestPalindromeSubstring(str) {
    let smallestSubStr = str;
    let minLen = Infinity;
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let substr = str.slice(i, j);
            if (isPalindrome(substr)) {
                if (substr.length < minLen) {
                    minLen = substr.length;
                    smallestSubStr = substr;
                }
            }
        }
    }
    return smallestSubStr;
}

console.log(smallestPalindromeSubstring(str));