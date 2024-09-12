function duplicates(a, n) {
    let charCount = {};
    for(let char of a){
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    let dup = [];
    for(let key of Object.keys(charCount)){
        if(charCount[key] !== 1){
            dup.push(key);
        }
    }
    
    return dup.length === 0 ? [-1] : dup;
 }