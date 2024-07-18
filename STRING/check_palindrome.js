let str = "level"


function checkPalindrome(str) {
    let reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i);
    }
    return str == reversed;
}

console.log(checkPalindrome(str) ? "The string is palindrome" : "the string is not palindrome");