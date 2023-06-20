
function myFunction() {  
    var  arr= ['1', '2', '3', '4', '5'];
    var sum = 1;
 
    for (var i = 1; i < arr.length; i++) {
         var result = Math.sqrt(arr[i++]) * + arr[i];
         console.log(result);
    }
 }
 
 myFunction();