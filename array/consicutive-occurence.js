(function(){
  
    let arr = [1,1,2,2,3,2,2,3,3,4,3];
    const KEY = 3;
    console.clear();
       let i = 0 , j = i+1 , count = 0;
    
    while(j < arr.length){
        if(arr[i] === KEY){
        if(arr[i] === arr[j]) {
            count++;
          j++;
        } else {
            i = j;
          j++;
        }
      } else {
          i++;
        j++;
      }
      
    }
   
   console.log(count);
  
  })();