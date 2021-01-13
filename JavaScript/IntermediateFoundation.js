
function sum(n){
  
    var sum=0;
    for(var i=0;i<=n;i++)
      sum+=i;
    
    return sum
  }
  
  
  function fact(n){
    var f=1;
    for(var i=1;i<=n;i++)
      f*=i;
   return f;
  }
  
  
  
  
  
  
   function fib(n) {
          
     if(n===0) return 0;
     var prev, curr = 0, next = 1;
  
          for (var i =1; i< n ; i++) {
              prev =curr;
            
              curr = next
  
              next = prev + curr;
  
          }
          return next;
   }
  
  
  
  
  
  
  function secToLast(arr){
    if(arr.length>=2) 
  return arr[length-2];
    
    else return null
      }
  
  
  
  function nElement(arr,n){
    if(arr.length>=n) 
  return arr[arr.length-n];
    
    else return null
      }
  
  
  function secMax(arr){
    
    var max = (arr[0] >= arr[1])?  
          arr[0]:arr[1];
    
    
    var max2 = (arr[0] <= arr[1])?  
          arr[0]:arr[1];
    
    for(var i=1;i<arr.length;i++)
    {
    
      
      if(arr[i]>max)
    {max2=max
      max =arr[i]
    } 
    else
       if(arr[i]>max2 && max1!=arr[i] )
       max2=arr[i];
    }
  
    return max2
  }
  
  
  
  
  
  
  function double(arr){
    var newarr=[]
    
    for(var i=0 ,j=0;i<arr.length;i++,j+=2)
    {newarr[j]= arr[i];
     newarr[j+1]=arr[i];
    
     
    }
    return newarr
  }
  
  
  
  
  
  