function isSubset(a1, a2, n, m){
    for(let ele of a2){
     if(a1.indexOf(ele) === -1){
         return "No";
     }
     a1.splice(a1.indexOf(ele),1);
    }
    return "Yes"; 
 }