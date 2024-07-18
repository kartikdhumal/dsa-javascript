let str = "abcd";
let str2 = "bcda";

function checkRotation(str, str2) {
    let newStr = str + str;
    return newStr.includes(str2);
}

console.log(checkRotation(str, str2) ? `${str2} includes in ${str}` : `${str2} is not included in ${str}`);