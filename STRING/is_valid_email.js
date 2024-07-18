let str = "abc@gmail.com";
let str2 = "invalid-email";

function isValidEmail(str) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(str);
}

console.log(`${isValidEmail(str) ? "Valid Email" : "Invalid email"}`);
console.log(`${isValidEmail(str2) ? "Valid Email" : "Invalid email"}`);
