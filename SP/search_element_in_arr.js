function search(arr, x) {
    let found = false;
    let index;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === x){
            found = true;
            index = i;
            break;
        }
    }
return index !== undefined ? index : -1;
}