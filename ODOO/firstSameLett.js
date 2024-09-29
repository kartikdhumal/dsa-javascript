let strs = ["yashvi", "yashasvi", "yash", "yashika", "yashu"];

function firstSame(strs) {
    if (strs.length === 0) return "";
    strs.sort();
    let i = 0;
    let firstLet = strs[0];
    let lastLet = strs[strs.length - 1];
    let matching = "";

    while (i < firstLet.length && i < lastLet.length) {
        if (firstLet[i] === lastLet[i]) {
            matching += firstLet[i];
        }
        else {
            break;
        }
        i++;
    }

    return matching;
}

console.log(firstSame(strs));