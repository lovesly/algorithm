class Solution {
    public int myAtoi(String str) {
        if(str.length() == 0){return 0;}
        int sign =1;
        int i = 0;
        int base = 0;
        str = str.trim();
        char[] array = str.toCharArray();
        for(int j =0;j<str.length();j++){
            if(j==0 && (array[0] =='+' || array[0] =='-')){
                int a = array[0] == '-'?1:0;
                sign = 1-2*a;
                continue;
            }else if(array[j]>='0' && array[j]<='9'){
                if(base >Integer.MAX_VALUE/10 || (base == Integer.MAX_VALUE/10 && array[j] > '7')){
                    if(sign ==1){
                        return Integer.MAX_VALUE;
                    }else{
                        return  Integer.MIN_VALUE;
                    }
                }
                base = base*10+(array[j] -'0');
            }else{
                return base*sign;
            }
        }   
        return base*sign;
    }
}

// just a reference