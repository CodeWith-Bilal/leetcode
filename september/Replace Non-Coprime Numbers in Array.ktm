class Solution {
    fun replaceNonCoprimes(nums: IntArray): List<Int> {
        val stack = mutableListOf<Int>()

        for (num in nums) {
            var curr = num
            while (stack.isNotEmpty()) {
                val last = stack.last()
                val g = gcd(curr, last)
                if (g == 1) break 
                stack.removeAt(stack.size - 1)
                curr = lcm(curr, last, g)
            }
            stack.add(curr)
        }
        return stack
    }

    private fun gcd(a: Int, b: Int): Int {
        var x = a
        var y = b
        while (y != 0) {
            val tmp = x % y
            x = y
            y = tmp
        }
        return x
    }

    private fun lcm(a: Int, b: Int, g: Int): Int {
        return (a / g) * b
    }
}
