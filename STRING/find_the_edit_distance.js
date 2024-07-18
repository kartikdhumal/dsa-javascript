let str = "guddupandit"
let str2 = "pandit"

function findEditDistance(str, str2) {
    let strr1 = str;
    let strr2 = str2;
    let count = 0;
    let count2 = 0;
    for (var i = 0; i < strr1.length; i++) {
        count++;
    }

    for (var j = 0; j < strr2.length; j++) {
        count2++;
    }
    return Math.abs(count2 - count);
}

console.log(findEditDistance(str, str2));