function longestCommonPrefix(arr) {
    arr.sort();
    let s1 = arr[0];
    let s2 = arr[arr.length - 1];
    let ans = "";
    let i = 0, j = 0;
    while (i < s1.length && j < s2.length) {
        if (s1.charAt(i) === s2.charAt(j)) {
            ans += s1.charAt(i);
            i++; j++;
        } else {
            break;
        }
    }
    return ans.length === 0 ? -1 : ans;
}