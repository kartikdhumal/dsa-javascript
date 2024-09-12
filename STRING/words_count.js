let str = "hello bablu bhaiyaa king of mirzapur bablu bhai zindabaad bablu";


function countOfOccurance(str) {
    let word = "";
    let words = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            words.push(word);
        }
        else { }
        word = word + str[i];
    }
    words.push(word);
    return words.length;
}

console.log(countOfOccurance(str));