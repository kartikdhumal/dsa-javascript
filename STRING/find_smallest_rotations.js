var str = "bca";

function findSmallestRotation(str) {
    let lcs = [];
    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j <= str.length; j++) {
            lcs.push(str.slice(i) + str.slice(0, i));
        }
    }
    let smallest = lcs[0];
    for (var k = 0; k < lcs.length; k++) {
        if (lcs[k] < smallest) {
            smallest = lcs[k];
        }
    }
    return smallest
}

console.log(findSmallestRotation(str));