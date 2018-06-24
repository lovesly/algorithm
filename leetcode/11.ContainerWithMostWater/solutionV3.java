class Solution {
    public int maxArea(int[] height) {
        if (height.length < 2) return 0;
        int len = height.length;
        int start = 0, end = len - 1, left, right;
        int max = 0, area;
        while (start < end) {
            left = height[start];
            right = height[end];
            if (left <= right) {
                area = (end - start) * left;
                while (height[++start] < left);
            } else {
                area = (end - start) * right;
                while (height[--end] <= right);
            }
            if (area > max) max = area;
        }
        return max;
    }
}

// similar idea
// each loop, you move until find an element that larger than boundry.
// be aware that since left boundry could equal right boundry, so you have to 
// make sure: while (height[++start] < left, if using <= there will be an error, index out of boundry

// the different part is, in solutionV2, each loop, we find the next element that larger 
// or equal than the other boundry.