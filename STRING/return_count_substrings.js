let str = "banana";

function returnCOuntSubString(str) {
    let myset = new Set();
    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j <= str.length; j++) {
            myset.add(str.substring(i, j));
        }
    }
    return myset.size;
}

console.log("Size of total distinct substrings");
console.log(returnCOuntSubString(str));