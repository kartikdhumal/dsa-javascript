let str = "australia"


function reverseString(str) {
    let reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i);
    }
    return reversed;
}

console.log(`The reverse of ${str} is ` + reverseString(str));