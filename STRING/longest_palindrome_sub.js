let str = "racecarlevelmalayalam"

function checkPalindrome(str) {
    let reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i);
    }
    return str == reversed;
}

function longestPalindrome(str) {
    let lcs = [];
    let palindromes = [];
    let longest = "";

    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j <= str.length; j++) {
            lcs.push(str.substring(i, j));
            if (checkPalindrome(str.substring(i, j))) {
                palindromes.push(str.substring(i, j));
            }
        }
    }

    for (var z = 0; z < palindromes.length; z++) {
        if (palindromes[z].length > longest.length) {
            longest = palindromes[z];
        }
    }
    return longest;
}

console.log("Longest Palindrome");
console.log(longestPalindrome(str));

