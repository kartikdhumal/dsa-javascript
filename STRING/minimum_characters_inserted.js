let str = "level sab ke niklenge";

function checkPalindrome(str) {
    let reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i);
    }
    return str == reversed;
}

function minimumCharactersInserted(str) {
    let max = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let substr = str.slice(i, j);
            if (checkPalindrome(substr)) {
                max = Math.max(max, substr.length);
            }
        }
    }
    return str.length - max;
}

console.log("Minimum length required to make palindrome");
console.log(minimumCharactersInserted(str));