function majorityElement(a, size)
{
    if(size === 1) return a[0];
    let charCount = {};
    let maxNum = 0;
    let majoCount = size / 2;
    
    for (let i = 0; i < size; i++) {
        charCount[a[i]] = (charCount[a[i]] || 0) + 1;
    }
    
    for(let char of Object.keys(charCount)){
        if(charCount[char] > majoCount){
            maxNum = char;
        }
    }
    
    return maxNum === 0 ? -1 : maxNum;
}