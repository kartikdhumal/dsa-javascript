var str1 = "divya";
var str2 = "aivdy";


function isAnagram(s1, s2) {
    if (s1.length != s2.length) {
        return false;
    }

    let str1 = s1.split("").sort().join("");
    let str2 = s2.split("").sort().join("");

    return str1 == str2
}

console.log(isAnagram(str1, str2) ? "Both string are anagram" : "Both string are not anagram");