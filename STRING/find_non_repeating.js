let str = "australia"


function findLongestString(str) {
    let charCount = {};

    for (var i = 0; i < str.length; i++) {
        if (charCount[str.charAt(i)]) {
            charCount[str.charAt(i)]++;
        } else {
            charCount[str.charAt(i)] = 1;
        }
    }

    for (var i = 0; i < str.length; i++) {
        if (charCount[str.charAt(i)] === 1) {
            return str.charAt(i);
        }
    }

    return null;
}

console.log("FIrst non repeating character is : " + findLongestString(str));