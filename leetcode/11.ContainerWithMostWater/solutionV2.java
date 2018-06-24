class Solution {
    public int maxArea(int[] height) {
        if (height.length < 2) return 0;
        int len = height.length;
        int start = 0, end = len - 1, left = height[start], right = height[end];
        int max = (len - 1) * Math.min(left, right);
        while (start < end) {
            while (height[start] <= right && start < end) {
                max = Math.max(max, (end - start) * height[start]);
                start++;
            }
            left = height[start];
            while (height[end] <= left && start < end) {
                max = Math.max(max, (end - start) * height[end]);
                end--;
            }
            right = height[end];
        }
        return max;
    }
}

// same idea, cleaner.