function returnMax(n,arr){
   let max = 0;
   let maxIndex = 0;
   for(let i=0; i<arr.length; i++){
       if(arr[i] > max){
        max = arr[i];
        maxIndex = i;
       }
   }
   return maxIndex;
}

let N = 2;
let arr = [2,3];
console.log(returnMax(N , arr));