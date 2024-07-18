var str = "guddu bhaiyaa the king of mirzapur"
var change = "kaleen"

function replaceOccurance(str, change) {
    let arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "guddu") {
            arr[i] = change;
        }
    }
    let newStr = arr.join(" ");
    return newStr;
}

console.log(`after changing occurance of string with ${change}`);
console.log(replaceOccurance(str, change));