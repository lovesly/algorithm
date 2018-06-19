import java.lang.*;
import java.util.*;

public class Test{  
    public static void main(String[] args){  
        System.out.println("Test for Longest Palindromic");  
        String res = convert("PAYPALISHIRING", 4);
        System.out.println(res);
    }  

    public static String convert(String s, int numRows) {
        if (s.length() <= 2 || numRows == 1) return s;
        if (numRows < 1) return null;
        
        List<StringBuilder> rows = new ArrayList<>();
        for (int i = 0, len = Math.min(numRows, s.length()); i < len; i++) {
            rows.add(new StringBuilder());
        }
        int curRow = 0; 
        boolean goingDown = false;
        for (char c: s.toCharArray()) {
            rows.get(curRow).append(c);
            if (curRow == 0 || curRow == numRows - 1) goingDown = !goingDown;
            curRow += goingDown ? 1 : -1;
        }
        StringBuilder res = new StringBuilder();
        for (StringBuilder row: rows) res.append(row);
        return res.toString();
    }
} 