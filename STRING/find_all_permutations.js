let str = "abc";

function findPermutations(str) {
    if (str.length === 1) return [str];
    let permutations = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let remaingChar = str.slice(0, i) + str.slice(i + 1);
        let innerPerm = findPermutations(remaingChar);
        for (let perm of innerPerm) {
            permutations.push(char + perm);
        }
    }
    return permutations;
}

console.log(findPermutations(str));