n = 40;

function checkPrime(n) {
    if (n <= 1) return false;

    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

for (var i = 2; i <= n; i++) {
    if (checkPrime(i)) {
        console.log(i + " ");
    }
}