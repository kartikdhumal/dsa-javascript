var arr = [1, 2, [3, 4], [5, 7, 6]];

function flattenArray(arr) {
    let result = [];
    function flatterHelper(innerarr) {
        for (let element of innerarr) {
            if (Array.isArray(element)) {
                flatterHelper(element);
            }
            else {
                result.push(element);
            }
        }
    }
    flatterHelper(arr);
    return result;
}

console.log(flattenArray(arr));