class Solution {
    public String countAndSay(int n) {
		if(n==1)return "1";
		else {
			StringBuilder sb=new StringBuilder();
			String forward =countAndSay(n-1);
			char[] words=forward.toCharArray();
			int i=0;
			while(i<words.length) {
				int j=i;
				while(j<words.length&&words[i]==words[j])j++;
				sb.append(j-i).append(words[i]);
				i=j;
			}
			return sb.toString();
		}
    }
}

// recursive, char array, stringBuilder. 
// I thought recursive should be slower...