class Solution {
    fun minScoreTriangulation(values: IntArray): Int {
        val n = values.size
        val dp = Array(n) { IntArray(n) }

        for (len in 2 until n) { 
            for (i in 0 until n - len) {
                val j = i + len
                dp[i][j] = Int.MAX_VALUE
                for (k in i + 1 until j) {
                    dp[i][j] = minOf(
                        dp[i][j],
                        dp[i][k] + dp[k][j] + values[i] * values[j] * values[k]
                    )
                }
            }
        }
        return dp[0][n - 1]
    }
}
