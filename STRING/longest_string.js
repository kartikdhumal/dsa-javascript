function LongestWord(sen) {
    if (sen.length === 0) return sen;
    sen = sen.replace(/[^a-zA-Z0-9 ]/g, '');
    arr = sen.split(" ")
    let maxStr = "";
    for (let str of arr) {
        if (str.length > maxStr.length) {
            maxStr = str;
        }
    }
    return maxStr;
}

console.log(LongestWord("fun..&& time"))