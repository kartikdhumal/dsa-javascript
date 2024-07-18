var str = "munna bhaiyaa king of mirzapur"

function splitString(str) {
    let newStr = [];
    let word = "";

    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == " ") {
            newStr.push(word);
            word = "";
        }
        else {
            word = word + str.charAt(i);
        }
    }
    
    newStr.push(word);
    return newStr;
}

console.log(splitString(str));