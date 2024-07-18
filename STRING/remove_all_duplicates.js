let str = "australia";

function removeDuplicates(str) {
    let temp = "";
    for (var i = 0; i < str.length; i++) {
        if (!temp.includes(str.charAt(i))) {
            temp += str.charAt(i);
        }
    }
    return temp;
}

console.log("After removing all duplicates");
console.log(removeDuplicates(str));