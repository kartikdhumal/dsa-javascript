var str = "robin bhaiyaa king of mirzapur";

function reverseString(str) {
    let reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i);
    }
    return reversed;
}

function reverseWordString(str) {
    let words = [];
    let word = "";
    for (var i = str.length - 1; i >= 0; i--) {
        if (str.charAt(i) == " ") {
            words.push(reverseString(word));
            word = "";
        }
        else {
            word = word + str.charAt(i);
        }
    }
    words.push(reverseString(word));
    return words.join(" ");
}


console.log(reverseWordString(str));
