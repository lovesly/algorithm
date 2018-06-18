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

// shame on you, ugly code.
// well, it's not that bad. it's the second best/next to the best solution. 
// and the best one is definitely a hard solution, flag algorithm level i guess.
// but it would be better if you could do some abstraction(sounds wierd)

// another issue, this solution takes twice as much as v2 solution, 
// don't understand