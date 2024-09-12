function merge(S1, S2) {
    let ans = '';
    let n = Math.max(S1.length, S2.length);

    for (let i = 0; i < n; i++) {
        if (i < S1.length) {
            ans += S1[i];
        }
        if (i < S2.length) {
            ans += S2[i];
        }
    }

    return ans;
}