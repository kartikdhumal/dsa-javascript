let str = "divya";

function isStringUnique(str) {
    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j < str.length; j++) {
            if (str.charAt(i) == str.charAt(j)) {
                return false;
            }
        }
    }
    return true;
}

console.log(isStringUnique(str) ? "There are unique characters" : "There are not unique characters");