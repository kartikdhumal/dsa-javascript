let str = "munna bhai mbbs";

function removeAllWhiteSpace(str) {
    let newstr = "";
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) != " ") {
            newstr += str.charAt(i);
        }
    }
    return newstr;
}

console.log(`${str} after removing whitespaces`);
console.log(removeAllWhiteSpace(str));