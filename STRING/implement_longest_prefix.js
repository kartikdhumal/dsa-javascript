let strs = ["rina", "riya", "rinku"];

function longestPrefix(strs) {
    if (strs.length === 0) {
        return "";
    }

    let longprefix = strs[0];
    for (let i = 0; i < strs.length; i++) {
        for (let j = 0; j < longprefix.length && j < strs[i].length; j++) {
            if (longprefix[j] !== strs[i][j]) {
                longprefix = longprefix.substring(0, j); // 
                break;
            }
        }

        if (longprefix === "") {
            return "";
        }

    }
    return longprefix;
}

console.log("Longest prefix is " + longestPrefix(strs));