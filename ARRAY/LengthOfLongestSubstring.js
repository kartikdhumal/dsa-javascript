var lengthOfLongestSubstring = function (s) {
    let comb = [];
    let dup = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            comb.push(s.slice(i, j));
        }
    }
    return comb;
};


var str = "abcabcbb";
console.log(lengthOfLongestSubstring(str));