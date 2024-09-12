function removeDups(str) {
    let newArr = Array.from(new Set(str.split("")));
    return newArr.join("");
}