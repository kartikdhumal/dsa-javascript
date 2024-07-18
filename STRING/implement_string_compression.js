let str = "aabcccccaaa";

function compressString(str) {
    let compressed = "";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        count++;
        if (i + 1 >= str.length || str.charAt(i) !== str.charAt(i + 1)) {
            compressed += str.charAt(i) + count;
            count = 0;
        }
    }

    return compressed;
}

console.log(compressString(str));