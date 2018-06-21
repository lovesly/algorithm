class Solution {    
    public int myAtoi(String str) {
        str = str.trim();
        boolean flag = true; // true => positive, false => negative
        int start=0;
        int res = 0;
        
        if(str.length() == 0) return 0;
        if(str.charAt(0) == '-') {
            flag = false;
            start = 1;
        }else if(str.charAt(0) == '+')
            start = 1;
            
        for(int i = start; i < str.length(); i++) {
            char c = str.charAt(i);
            if(c > '9' || c < '0')
                break;
            if (res > Integer.MAX_VALUE/10 || (res == Integer.MAX_VALUE/10) && c > '7') {
                return flag ? Integer.MAX_VALUE : Integer.MIN_VALUE;
            }
            res = res * 10 + (c - '0');
        }
        return flag ? res : res*-1;
    }
}


// since we check the overflow in for loop, we can use a int as the result
// use c to store the char, so that you don't have to do it everytime
// check the overflow in the forloop, same trick in reverse Integer