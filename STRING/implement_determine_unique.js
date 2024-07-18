let str = "abcdefgh";

function implementDetermineUnique(str) {
    let temp = "";
    for (var i = 0; i < str.length; i++) {
        if (!temp.includes(str[i])) {
            temp += str[i];
        }
    }
    return str === temp ? true : false
};

console.log(implementDetermineUnique(str) ? "All are unique characters" : "All are not unique characters");