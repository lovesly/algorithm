class Solution {
    public String countAndSay(int n) {
        String prev = "1";
        String cur= "";
        for (int i = 2; i <= n; i++) {
            int len = prev.length(); 
            int count = 0;
            for (int j = 0; j < len; j++) {
                count++;
                if (j == len - 1 || prev.charAt(j) != prev.charAt(j+1)) {
                    // cur += (count + prev.charAt(j)), int + char => wrong 
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

// too slow