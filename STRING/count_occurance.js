let str = "newzealand";
let c = 'a';

function countOccurance(str, c) {
    let count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === c) {
            count++;
        }
    }
    return count;
}

console.log(`Occurance of ${c} in ${str} is ` + countOccurance(str, c));