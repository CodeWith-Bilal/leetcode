//leetcode daily challange

class Solution {
    public long kthSmallestProduct(int[] nums1, int[] nums2, long k) {
        long low = -10000000000L, high = 10000000000L;
        while (low < high) {
            long mid = low + (high - low) / 2;
            if (countLessEqual(nums1, nums2, mid) < k) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low;
    }

    private long countLessEqual(int[] A, int[] B, long target) {
        long count = 0;
        for (int a : A) {
            if (a == 0) {
                if (target >= 0) count += B.length;
            } else if (a > 0) {
                int left = 0, right = B.length;
                while (left < right) {
                    int mid = (left + right) / 2;
                    if ((long)a * B[mid] <= target) left = mid + 1;
                    else right = mid;
                }
                count += left;
            } else { 
                int left = 0, right = B.length;
                while (left < right) {
                    int mid = (left + right) / 2;
                    if ((long)a * B[mid] <= target) right = mid;
                    else left = mid + 1;
                }
                count += B.length - left;
            }
        }
        return count;
    }
}
// This code defines a solution to the problem of finding the k-th smallest product of two sorted arrays.
// The `kthSmallestProduct` method performs a binary search on the possible product values, while the `countLessEqual` method counts how many products are less than or equal to a given target.
// The solution handles both positive and negative numbers in the arrays, ensuring that the product calculations are accurate based on the sign of the elements.