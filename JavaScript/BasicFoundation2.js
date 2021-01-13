
//One
function makeItBig(arr) {
 
    for(var i =0;i<arr.length;i++)
    if (arr[i]>0)
    arr[i] ='big';
    
       return arr; 
   }
   
   
   
   //Two
   function maxMin(arr) {
       var min = arr[0];
       var max = arr[0];
       for (var i=0;i<arr.length;i++)
           {
           if (arr[i]< min )
           min =arr[i];
       
       if (arr[i] >max )
           max =arr[i];
       
           }
           
   
     console.log(min)
     return max
   }
   
   
   
   
   //Three
   function secToLastAndFirstOdd(arr) {
              var found =0;
    
     for (var i=0;i<arr.length;i++)
           {
           var odd ;  
           if (i!== 0)
           console.log(arr[i])
       
       if (arr[i] %2 && found===0 )
          { odd=arr[i];
           found=1;  
          }  
       
           }
       return odd;
   }
   
   
   
   
   
   //Four
   function doubleArr(arr) {
     var newArr=[];  
     for (var i=0;i<arr.length;i++)
   {    newArr[i] = arr[i]*2
       
   }   
       return newArr;
       
   }
   
   
   
   //Five
   function  countPositives(arr) {
    var c=0;
    for(var i =0;i<arr.length;i++)
    if (arr[i]>0)
    c++;
       
   arr[arr.length-1]= c
   
   return arr;
   }
   
   
   
   
   
   //Six
   function evenOdd(arr){
     for(var i=0;i<arr.length;i++){
    
       if(arr[i] % 2 && arr[i+1]%2 &&arr[i+2]%2)
             console.log("Thats odd!");
         
       
       
         if(!(arr[i]%2) && !(arr[i+1]%2) &&!(arr[i+2]%2)){
       
       console.log("Even more so!");}
          
   }
   }
   
   
   
   
   
   //Seven
   function incSeconds(arr){
     for (var i=0;i<arr.length;i++){
       if(i%2)
         arr[i] +=1;
      console.log(arr[i]);
     }
     return arr;
   }
   
   
   
   
   
   
   
   
   //Eight
   function previousLengths(arr){
     
     for(var i=arr.length-1;i>0;i--)
       arr[i]=arr[i-1].length;
     
     return arr;
   }
   
   
   
   
   
   
   
   //Nine
   function Seven(arr){
     var newArr = [];
     for(var i=0;i<arr.length;i++)
       if(i!==0)newArr.push(arr[i]+7);
     
     return newArr;
   }
   
   
   
   
   
   
   
   
   //Ten
   function reverse(arr){
     
     for(var i=0;i<arr.length/2;i++){
       
       var temp =arr[i];
       arr[i]=arr[arr.length-1-i];
       arr[arr.length-1-i] =temp;
       
       }
     return arr;
     
   }
   
   
   
   
   
   
   
   //Eleven
   function Neg(arr){
    var newArr=[];
     for(var i=0;i<arr.length;i++){
       newArr[i]=-Math.abs(arr[i]);
       
     }
     
     return newArr;}
   
   
   
   
   
   
   
   
   
   
   ///twelve
   function alwaysHungry(arr){
     
     var count=0;
     for(var i=0;i<arr.length;i++)
         if(arr[i] == "food")
           console.log("yummy")
           
           else count++
           
     if(count==arr.length)
       console.log("I am hungry")
     
   }
   
   
   
   
   
   //Thirteen
   function swapTowardCenter(arr){
     var temp = arr[arr.length-1]; 
     arr[arr.length-1] = arr[0];
     arr[0] = temp;
     var temp2 = arr[arr.length-3];
     arr[arr.length-3] = arr[2];
     arr[arr.length-3] = temp2;
     return arr;
   }
   
   
   
   
   
   
   //Fourteen
   function scaleArray(arr,n){
     for(var i=0;i<arr.length;i++)
   {   arr[i]= arr[i]*n;
   }  
       
     return arr;
   
   
   }  
   
   
   
   
   
   
   
   
   
   
   