class Solution {
    public int maxArea(int[] height) {
        if (height.length < 2) return 0;
        int len = height.length;
        int start = 0, end = len - 1, left = height[start], right = height[end];
        int max = (len - 1) * Math.min(height[start], height[end]);
        while (start < end) {
            // start from short side?
            if (height[start] <= height[end]) {
                // move from left
                // for loop or while?
                // if this is a correct algorithm, can we abtract 2 block into 1
                while (++start < end) {
                    if (height[start] > left && (end - start) * Math.min(height[start], height[end]) > max) {
                        max = (end - start) * Math.min(height[start], height[end]);
                        left = height[start];
                        if (left > right) {
                            break;
                        } else {
                            continue;
                        }
                    } else if (height[start] > right) {
                        // should move right
                        break;
                    }
                }
            } else {
                // move from right
                while (start < --end) {
                    if (height[end] > right && (end - start) * Math.min(height[start], height[end]) > max) {
                        max = (end - start) * Math.min(height[start], height[end]);
                        right = height[end];
                        if (right > left) {
                            break;
                        } else {
                            continue;
                        }
                    } else if (height[end] > left) {
                        break;
                    }
                }
            }
        }
        return max;
    }
}

// it's not slow, and the idea is correct. 
// but the code is so fucking ugly, it should be done within 15 lines.