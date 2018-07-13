class Solution {
    public String countAndSay(int n) {
        // StringBuilder new_sb = new StringBuilder();
        StringBuilder prev = new StringBuilder("1");
        for (int i = 2; i <= n; i++) {
            StringBuilder cur = new StringBuilder();
            int len = prev.length(); 
            int count = 0;
            for (int j = 0; j < len; j++) {
                count++;
                if (j == len - 1 || prev.charAt(j) != prev.charAt(j+1)) {
                    cur = cur.append(count).append(prev.charAt(j));
                    count = 0;
                }
            }
            prev = cur;
        }
        return prev.toString();
    }
}

// 用stringbuilder 改写， 还是慢
