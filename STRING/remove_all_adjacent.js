let str = "abbaca";

function removeAdjacent(str) {
    let stack = [];

    for (var i = 0; i < str.length; i++) {
        if (stack.length > 0 && stack[stack.length - 1] === str.charAt(i)) {
            stack.pop();
        }
        else {
            stack.push(str.charAt(i));
        }
    }
    return stack.join("");
}

console.log("After removing all adjacents")
console.log(removeAdjacent(str));