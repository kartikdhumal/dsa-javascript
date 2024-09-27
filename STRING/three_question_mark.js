function QuestionsMarks(str) {
    let found = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] + str[i + 1] + str[i + 2] === "???") {
            found = true;
            break;
        }
    }
    return found;
}

// keep this function call here 
console.log(QuestionsMarks(readline()));