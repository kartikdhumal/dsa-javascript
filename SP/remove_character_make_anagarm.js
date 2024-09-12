function remAnagram(str1, str2){
    let count = Array(26).fill(0);
    
    for (let i = 0; i < str1.length; i++) {
     count[str1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    
    for (let i = 0; i < str2.length; i++) {
     count[str2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    
    return count.reduce((acc, val) => acc + Math.abs(val), 0);
 }