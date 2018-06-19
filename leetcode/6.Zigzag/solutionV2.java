// refactor V1
// same idea, but cleaner, combine 3 cases together

class Solution {
    public String convert(String s, int numRows) {
        if (s.length() <= 2 || numRows == 1) return s;
        if (numRows < 1) return null;
        
        StringBuilder res = new StringBuilder();
        int cycle = 2 * numRows - 2;
        for (int i = 0, len = s.length(); i < numRows; i++) {
            for (int j = 0; j + i < len; j += cycle) {
                res.append(s.charAt(i + j));
                if (i != 0 && i != numRows - 1 &&  j + cycle - i < len) {
                    res.append(s.charAt(j + cycle - i));
                }
            }
        }
        return res.toString();
    }
}