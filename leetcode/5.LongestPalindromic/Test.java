import java.lang.*;

public class Test{  
    public static void main(String[] args){  
        System.out.println("Test for Longest Palindromic");  
        String res = longestPalindrome("cbbd");
        System.out.println(res);
    }  

    public static String longestPalindrome(String s) {
        if (s.length() == 0) return null;
        int start = 0, end = 0, max = 0, JIndex = 0;
        
        for (int i = 0, len = s.length(); i < len; i++) {
            // odd case
            for (int j = 0; i - j >= 0 && i + j < len; j++) {
                if (s.charAt(i - j) != s.charAt(i + j)) {
                    break;
                }
                JIndex = j;
            }
            if (JIndex * 2 + 1 > max) {
                start = i - JIndex;
                end = i + JIndex;
                max = JIndex * 2 + 1;
            } 
            // even case
            JIndex = -1;
            for (int j = 0; i - j >= 0 && i + j + 1 < len; j++) {
                if (s.charAt(i - j) != s.charAt(i + j + 1)) {
                    break;
                }
                JIndex = j;
            }
            if (JIndex * 2 + 2 > max) {
                start = i - JIndex;
                end = i + JIndex + 1;
                max = JIndex * 2 + 2;
            } 
            JIndex = 0;
        }
         
        return s.substring(start, end + 1);
    }
} 