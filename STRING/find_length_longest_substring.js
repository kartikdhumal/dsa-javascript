let str = "australia"


function findLongestString(str) {
    let newstr = "";
    let longest = "";
    for (var i = 0; i < str.length; i++) {
        if (!newstr.includes(str.charAt(i))) {
            newstr += str.charAt(i);
        }
        else {
            if (newstr.length > longest.length) {
                longest = newstr;
            }
            newstr = newstr.slice(newstr.indexOf(str.charAt(i)) + 1) + str.charAt(i);
        }
    }

    if (newstr.length > longest.length) {
        longest = newstr;
    }

    return longest;
}

console.log("The longest string without repeating character");
console.log(findLongestString(str));