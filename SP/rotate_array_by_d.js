function rotateArr(arr, d, n) {
    let ans = new Array(n);
    for (let i = 0; i < n; i++) {
        ans[i] = arr[(i + d) % n];
    }
    for (let i = 0; i < n; i++) {
        arr[i] = ans[i];
    }

}