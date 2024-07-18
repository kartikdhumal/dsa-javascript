let num = 153;

function checkArmstrong(num) {
    let n = num.toString();
    let total = 0;
    for (var i = 0; i < n.length; i++) {
        total += (n.charAt(i) ** 3);
    }
    return num == total;
}

if (checkArmstrong(num)) {
    console.log("It is a Armstrong number");
}
else {
    console.log("It is not a Armstrong number");
}