function  armstrongNumber(n) {
    let number = n;
    let sum = 0;
    while(number > 0){
        let digit = number % 10;
        sum += digit * digit * digit;
        number = Math.floor(number / 10);
    }
    return sum === n;
}