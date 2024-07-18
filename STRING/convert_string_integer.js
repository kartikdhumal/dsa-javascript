let str = "221111";

function convertToInteger(str) {
    let num = parseInt(str, 10);
    if (isNaN(num)) {
        return "The string contains non-numeric characters.";
    }
    else {
        return num;
    }

}

console.log(convertToInteger(str));