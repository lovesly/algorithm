import java.lang.*;
import java.util.*;

public class Test{  
    public static void main(String[] args){  
        System.out.println("Test for Longest substring without repeating");  
        int res = lengthOfLongestSubstring("aab");
        System.out.println(res);
    }  

    private static int lengthOfLongestSubstring(String s) {
        int res = 0;
        int cur = 0;
        // map
        Map<Character,Integer> ht = new HashMap<>();
        
        for (int i = 0, len = s.length(); i < len; i++) {
            if (res >= len - i) break;
            for (int j = i; j < len; j++) {
                if (ht.containsKey(s.charAt(j))) {
                    res = Math.max(res, cur);
                    break;
                }
                cur = j - i + 1;
                ht.put(s.charAt(j), j);
            }
            res = Math.max(res, cur);
            ht.clear();
        }
        return res;
    }
} 