var arr = [12, 43, 54, 54, 43, 43, 56];
var firstNonRep;

for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

for (var i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) {
        firstNonRep = arr[i];
        break;
    }
}

console.log("First non repeating element in an array of integer is " + firstNonRep);