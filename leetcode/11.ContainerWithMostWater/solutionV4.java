class Solution {
    public int maxArea(int[] height) {
        if (height.length < 2) return 0;
        int len = height.length;
        int start = 0, end = len - 1, left = height[start], right = height[end];
        int max = (len - 1) * Math.min(left, right);
        while (start < end) {
            if (left <= right) {
                do {
                    max = Math.max(max, (end - start) * height[start]);
                } while (height[++start] < right);
                left = height[start];   
            } else {
                do {
                    max = Math.max(max, (end - start) * height[end]);
                } while (height[--end] < left);
                right = height[end];
            }
        }
        return max;
    }
}

// a modification to V2
// very interesting. 