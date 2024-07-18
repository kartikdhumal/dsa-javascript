var str = "australia";

function countVowels(str) {
    str = str.toLowerCase();
    var vowels = 0;
    var consonants = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {
            vowels++;
        }
        else {
            consonants++;
        }
    }

    console.log(`Total vowels in ${str} are ` + vowels);
    console.log(`Total consonants in ${str} are ` + consonants);
}

countVowels(str);