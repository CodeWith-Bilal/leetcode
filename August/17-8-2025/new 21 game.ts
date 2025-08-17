function new21Game(n: number, k: number, maxPts: number): number {
  if (k === 0 || n >= k - 1 + maxPts) return 1.0;

  const dp = new Array<number>(n + 1).fill(0);
  dp[0] = 1.0;

  let windowSum = 1.0; // sum of dp[i-1], dp[i-2], ..., dp[i-maxPts]
  let result = 0.0;

  for (let i = 1; i <= n; i++) {
    dp[i] = windowSum / maxPts;

    if (i < k) {
      // Still drawing from i, so its prob contributes to future states
      windowSum += dp[i];
    } else {
      // i >= k: game stops here
      result += dp[i];
    }

    // Remove the term that falls out of the window
    if (i - maxPts >= 0) {
      windowSum -= dp[i - maxPts];
    }
  }

  return result;
}
