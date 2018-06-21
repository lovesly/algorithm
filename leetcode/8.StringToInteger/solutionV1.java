class Solution {
    public int myAtoi(String str) {
        str = str.trim();
        boolean flag = true; // true => positive, false => negative
        int start=0;
        long res = 0;
        
        if(str.length() == 0) return 0;
        if(str.charAt(0) == '-') {
            flag = false;
            start = 1;
        }else if(str.charAt(0) == '+')
            start = 1;
            
        int cur = 0;
        for(int i = start; i < str.length(); i++) {
            if(str.charAt(i) > '9' || str.charAt(i) < '0')
                break;
            cur = str.charAt(i) - '0';
            res = res * 10 + cur;
            
            if(res>2147483647)
                return (!flag ? -2147483648 : 2147483647);
                    
        }
        return !flag ? (int)res*-1 : (int)res;
    }
}