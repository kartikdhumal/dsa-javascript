let str = "12345";

function checkDigits(str) {
    let regex = /^[0-9]+$/
    return regex.test(str);
}


console.log(checkDigits(str) ? "It contains only digits" : "it doesn't contain only digits")
