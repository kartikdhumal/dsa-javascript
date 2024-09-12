let str = "hello bablu bhaiyaa king of mirzapur bablu bhai zindabaad bablu";
let val = "bablu";


function occuranceWord(str,val) {
    let word = "";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            if(word === val){
                count++;
            }
            word="";
        }
        else { 
            word += str[i];
        }
    }
    if (word === val) {
        count++;
    }
    return count;
}

console.log(occuranceWord(str,val));