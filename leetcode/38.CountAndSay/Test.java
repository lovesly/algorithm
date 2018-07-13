import java.lang.*;

public class Test{  
    public static void main(String[] args){  
        System.out.println("Test for Longest Palindromic");  
        String res = countAndSay(2);
        System.out.println(res);
        String s = "123";
        String r = "test";
        System.out.println(r + 10 + s.charAt(1));
        r += (10 + s.charAt(1));
        System.out.println(r);
        System.out.println(10 + s.charAt());
    }  

    public static String countAndSay(int n) {
        String prev = "1";
        String cur= "";
        for (int i = 2; i <= n; i++) {
            int len = prev.length(); 
            int count = 0;
            for (int j = 0; j < len; j++) {
                count++;
                if (j == len - 1 || prev.charAt(j) != prev.charAt(j+1)) {
                    // cur += (count + prev.charAt(j)) not working
                    cur = cur + count + prev.charAt(j);
                    count = 0;
                }
            }
            prev = cur;
            cur = "";
        }
        return prev;
    }
} 