let str = "Was it a car or a cat I saw?";
let str2 = "A man, a plan, a canal, Panama!";

function checkAlpha(char) {
    return /^[a-zA-Z]$/.test(char);
}

function checkValidNonalpha(str) {
    let newstr = "";
    let reversed = "";

    for (var i = 0; i < str.length; i++) {
        if (checkAlpha(str.charAt(i))) {
            newstr += str.charAt(i);
        }
    }

    for (var j = newstr.length - 1; j >= 0; j--) {
        reversed += newstr.charAt(j);
    }
    reversed = reversed.toLowerCase();
    newstr = newstr.toLowerCase();
    return newstr == reversed;

}

console.log(checkValidNonalpha(str) ? "It is a palindrome!" : "It is not a palindrome.");
console.log(checkValidNonalpha(str2) ? "It is a palindrome!" : "It is not a palindrome.");