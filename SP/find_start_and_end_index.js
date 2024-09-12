function subarraySum(arr, n, s) {
    let last = 0;
    let start = 0;
    let currsum = 0;
    let flag = false;
    let res = [];

    for (let i = 0; i < n; i++) {

        currsum += arr[i];

        if (currsum >= s) {
            last = i;

            while (s < currsum && start < last) {
                currsum -= arr[start];
                ++start;
            }

            if (currsum == s) {
                res.push(start + 1);
                res.push(last + 1);
                flag = true;
                break;
            }
        }
    }

    if (!flag)
        res.push(-1);

    return res;
}