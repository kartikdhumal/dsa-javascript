var str = "hello i am in sydney";
var val = "sydney";

function findSubstring(str, val) {
    for (var i = 0; i < str.length; i++) {
        let found = true;
        for (var j = 0; j < val.length; j++) {
            if (str.charAt(i + j) !== val.charAt(j)) {
                found = false;
                break;
            }
        }
        if (found) {
            return i;
        }
    }
    return -1;
}

console.log(`Position of "${val}" in "${str}" - ` + findSubstring(str, val));