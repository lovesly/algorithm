import java.lang.*;
import java.util.*;

public class Test{  
    public static void main(String[] args){  
        System.out.println("Test for container with most water");  
        int res = maxArea(new int[]{2, 3, 4, 5, 18, 17, 6});
        System.out.println(res);
        int i = 0;
        while (i++ < 1) {
            //do something
            System.out.println(i);
        }
        System.out.println(i);
    }  

    public static int maxArea(int[] height) {
        if (height.length < 2) return 0;
        int len = height.length;
        int start = 0, end = len - 1, left = height[start], right = height[end];
        int max = (len - 1) * Math.min(left, right);
        while (start < end) {
            if (left <= right) {
                do {
                    max = Math.max(max, (end - start) * height[start]);
                } while (height[++start] < right);
                left = height[start];   
            } else {
                do {
                    max = Math.max(max, (end - start) * height[end]);
                } while (height[--end] < left);
                right = height[end];
            }
        }
        return max;
    }
} 