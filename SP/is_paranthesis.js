function ispar(x)
{
   let mystack = [];
   for(let i=0; i<x.length; i++){
       if(x[i] === '[' || x[i] === '(' || x[i] === '{'){
           mystack.push(x[i]);
       }
       else if(x[i] === ']' || x[i] === ')' || x[i] === '}'){
            if(mystack.length === 0) return false;
            let top = mystack.pop();
            if((x[i] === ']' && top !== '[') ||
                (x[i] === ')' && top !== '(') ||
                (x[i] === '}' && top !== '{')){
                return false;
            }
       }
   }
   
   return mystack.length === 0;
}