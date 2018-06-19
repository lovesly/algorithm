class Solution {
    public String convert(String s, int numRows) {
        if (s.length() <= 2 || numRows == 1) return s;
        if (numRows < 1) return null;
        
        StringBuilder res = new StringBuilder();
        for (int i = 0, len = s.length(); i < numRows; i++) {
            int cur = 0, index;
            if (i == 0 || i == numRows - 1) {
                cur = i == 0 ? 0 : 1;
                while (true) {
                    index = (numRows - 1) * cur;
                    if (index >= len) break;
                    res.append(s.charAt(index));
                    cur += 2;
                }
            } else {
                // general case 
                if (i < len) res.append(s.charAt(i));
                cur += 2;
                while (true) {
                    index = (numRows - 1) * cur;
                    if (index - i >= len) break;
                    res.append(s.charAt(index - i));
                    if (index + i >= len) break;
                    res.append(s.charAt(index + i));
                    cur += 2;
                }
            }
            
        }
        return res.toString();
    }
}

// shame on you, ugly. beat 80%.