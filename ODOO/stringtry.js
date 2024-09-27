function StringChallenge(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'N') {
            i++;
        }
        else if (str[i] === 'M') {
            newStr += newStr[newStr.length - 1];
        }
        else {
            newStr += str[i];
        }
    }
    return newStr;
}


let str = "abcNdgM";
console.log("Input : abcNdgM")
console.log("Expected output : abcgg")
console.log("Your output : " + StringChallenge(str));
