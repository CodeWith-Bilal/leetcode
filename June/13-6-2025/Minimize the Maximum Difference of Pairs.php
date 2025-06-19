<!-- leetcode daily challange
 You are given a 0-indexed integer array nums and an integer p. Find p pairs of indices of nums such that the maximum difference amongst all the pairs is minimized. Also, ensure no index appears more than once amongst the p pairs.

Note that for a pair of elements at the index i and j, the difference of this pair is |nums[i] - nums[j]|, where |x| represents the absolute value of x.

Return the minimum maximum difference among all p pairs. We define the maximum of an empty set to be zero. -->

class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $p
     * @return Integer
     */
    function minimizeMax($nums, $p) {
        sort($nums);
        $n = count($nums);

        $left = 0;
        $right = $nums[$n - 1] - $nums[0];

        // Binary Search
        while ($left < $right) {
            $mid = intdiv($left + $right, 2);
            if ($this->canFormPairs($nums, $p, $mid)) {
                $right = $mid;
            } else {
                $left = $mid + 1;
            }
        }

        return $left;
    }

    private function canFormPairs($nums, $p, $maxDiff) {
        $count = 0;
        $i = 0;
        $n = count($nums);

        while ($i < $n - 1) {
            if (abs($nums[$i + 1] - $nums[$i]) <= $maxDiff) {
                $count++;
                $i += 2; // skip both to avoid reuse
            } else {
                $i++; // try next
            }

            if ($count >= $p) return true;
        }

        return false;
    }
}

// Example usage
$solution = new Solution();
$nums = [1, 3, 6, 19, 20];
$p = 2;
$result = $solution->minimizeMax($nums, $p);
echo "Minimum maximum difference: " . $result; // Output: 2
// Example usage
// $solution = new Solution();
// $nums = [1, 3, 6, 19, 20];
// $p = 2;  
// $result = $solution->minimizeMax($nums, $p);
// echo "Minimum maximum difference: " . $result; // Output: 2
// Example usage