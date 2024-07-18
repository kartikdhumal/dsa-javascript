// Prime numbers are natural numbers greater than 1 that have no positive divisors other than 1 and themselves. 
// In other words, a prime number is a number that can only be divided by 1 and itself without leaving a remainder.
// 2 , 3 , 5 , 7

let num = 8;

function checkPrime(n) {
    if (n <= 1) return false;

    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

if (checkPrime(num)) {
    console.log(num + " is a prime number");
}
else {
    console.log(num + " is not a prime number");
}