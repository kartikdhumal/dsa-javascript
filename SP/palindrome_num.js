function reverseString(s)
{
s = s.replace(/\s+/g, '');
let seen = new Set();
let uniqueChars = "";
for (let i=s.length-1; i>=0; i--) {
    let char = s[i];
    if (!seen.has(char)) {
        seen.add(char);
        uniqueChars += char;
    }
}
return uniqueChars;
}