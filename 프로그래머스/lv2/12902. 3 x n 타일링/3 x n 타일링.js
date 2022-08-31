function solution(n) {
  const MOD = 1000000007
  const dp = new Array(n + 1).fill(0)

  dp[2] = 3

  if (n % 2 === 1) {
    return 0
  }

  for (let i = 4; i <= n; i += 2) {
    dp[i] = dp[i - 2] * 3 + 2

    for (let j = 2; j < i - 2; j += 2) {
      dp[i] += dp[j] * 2
    }

    dp[i] %= MOD
  }

  return dp[n]
}
