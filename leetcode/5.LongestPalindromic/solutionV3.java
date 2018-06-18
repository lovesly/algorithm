class Solution {
    public String longestPalindrome(String s) {
        if (s.length() == 0) return null;
        int start = 0, end = 0;
        int currLen = 0;
        for (int i = 0; i < s.length(); i++) {
            if (isPalindrome(s, i - currLen - 1, i)) {
                start = i - currLen - 1;
                end = i + 1;
                currLen += 2;
            } else if (isPalindrome(s, i - currLen, i)) {
                start = i - currLen;
                end = i + 1;
                currLen += 1;
            }
        }
        return s.substring(start, end);
    }

    public boolean isPalindrome(String s, int begin, int end) {
        if (begin < 0) return false;
        while (begin < end) {
            if (s.charAt(begin++) != s.charAt(end--)) return false;
        }
        return true;
    }
}

// interesting idea. everytime move right, consider current character as the end of a palindrome string
// funny part is how to prove the algorithm is correct. 
// say, curLen is 1, then check the string with length 2 or 3, and end with current character
// the idea behind the scene is any palindrome string starts from len 1, increase by 1 or 2, no exceptions.