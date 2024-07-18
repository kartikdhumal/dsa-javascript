let str = "445454";

function atoi(str) {
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        res = res * 10 + parseInt(str.charAt(i));
    }
    return res;
}

console.log(atoi(str));