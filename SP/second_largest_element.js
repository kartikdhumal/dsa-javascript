function print2largest(arr) {
    arr = Array.from(new Set(arr));
    arr.sort((a,b) => b-a);
    return arr.length < 2 ? -1 : arr[1];
 }