class Solution {
    fun triangularSum(nums: IntArray): Int {
        var arr = nums.toMutableList()
        while (arr.size > 1) {
            val newArr = mutableListOf<Int>()
            for (i in 0 until arr.size - 1) {
                newArr.add((arr[i] + arr[i + 1]) % 10)
            }
            arr = newArr
        }
        return arr[0]
    }
}
