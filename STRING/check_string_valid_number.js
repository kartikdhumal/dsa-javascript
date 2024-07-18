function isValidNo(str) {
    return /^[-+]?\d*\.?\d+$/.test(str);
}

console.log(isValidNo("123")); 