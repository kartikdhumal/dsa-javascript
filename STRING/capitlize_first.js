let str = "yamaha";

function capitlize(str) {
    str.trim();
    let firstLetter = str.charAt(0).toString().toUpperCase();
    let remLetter = str.slice(1);
    return firstLetter + remLetter;
}

console.log(`Capitalize ${str}`)
console.log(capitlize(str));