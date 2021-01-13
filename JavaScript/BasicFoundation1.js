function oneto255() {
    var arr = [];
   
   for (var i =1 ; i<=255;i+=1)
   arr.push(i);

    return arr; 
}



function geteven() {
    var arr = [];
    var sum=0;   
   
   for (var i =0 ; i<=1000;i+=2)
   
   sum+=i;
    
    return sum;
    
}



function sumodd() {
    var sum=0;   
   
   for (var i =0 ; i<=5000;i+=1)
    if (i%2) sum+=i;
    
   
    
    return sum;
    
}





function itrArr(arr) {
  
    var sum =0;
    arr.forEach(element => sum+=element);
 return sum;
}   


function findMax(arr) {
 var max = arr[0];
 for (var i=0;i<arr.length;i++)
 
 if (arr[i]>max) 
 max = arr[i];
 
 
 return max ;
}


function findAvg(arr) {
var sum = 0;
var c =0;

for (var i=0;i<arr.length;i++)
 {
     
 sum+=arr[i];
 c++;
 }
var avg = sum/c*1.0;

return avg;
     
   
}



function oddNumbers() {
    var arr = [];
 
 for(var i=1;i<=50;i++)
 if (i%2) arr.push(i)
 
    return arr; 
}


function greaterthanY(arr, Y) {
    var c =0;
    for (var i=0;i<arr.length;i++)
    if(arr[i]>Y) c+=1;
    
    return c;
    
}



function squareVal(arr) {
    for (var i=0;i<arr.length;i++)
    arr[i] = arr[i]*arr[i]
    
    
    return arr;
    
}


function noNeg(arr) {

    for (var i=0;i<arr.length;i++)
    if (   arr[i] < 0)arr[i]=0;
    
    
    return arr;
    
}



function maxMinAvg(arr) {
    var newArr=[];
    var min = arr[0];
var sum =0;
var  c=0;
    var max = arr[0];
    for (var i=0;i<arr.length;i++)
        {
        sum +=arr[i];
        c++
            
        
        
        if (arr[i]< min )
        min =arr[i];
    
    if (arr[i] >max )
        max =arr[i];
    
        }
        
        var avg = sum/c;
        
    newArr.push(max)
        newArr.push(min)
        newArr.push(avg)
        
    return newArr;
    
}


function swap(arr) {
 
 var temp = arr[0];
 arr [0]=arr[arr.length-1];
 arr[arr.length-1] =temp;
 
 return arr;
  }


function numTostr(arr) {
 
 for(var i =0;i<arr.length;i++)
 if (arr[i]<0)
 arr[i] ='Dojo';
 
    return arr; 
}























