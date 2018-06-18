public static String longestPalindrome(String s) {
    if (s.length() == 0) return null;
    int start = 0, end = 0;
    
    for (int i = 0, len = s.length(); i < len; i++) {
        int len1 = expandAroundCenter(s, i, i);
        int len2 = expandAroundCenter(s, i, i+1);
        int len = Math.max(len1, len2);
        if (len > start - end) {
            start = i - (len - 1) / 2;
            end = i + len / 2;
        }
    }
     
    return s.substring(start, end + 1);
}

private int expandAroundCenter(String s, int l, int r) {
    int L = l, R = r; // is this necessary?
    while (L >= 0 && R < s.length() && s.charAt(L) == s.charAt(R)) {
        L--;
        R++;
    }
    // smart
    return R - L - 1;
}