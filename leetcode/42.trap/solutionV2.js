var trap = function(height) {
   var number = 0;
   var flag = 0;
   for (var i =0; i < height.length -2; i++) {
       var isBreak = false;
       var tmp = 0;
       for (var j=i+1; j<height.length; j++) {
           if (height[i] - flag > height[j])
           {
               tmp += height[i] - flag - height[j];
           }else {
               number += tmp
               i = j-1;
               isBreak = true;
               flag = 0;
               break;
           }				   
       }
       if (!isBreak && j == height.length) {
           i--;
           flag++;
       }

   }
   return number;
};