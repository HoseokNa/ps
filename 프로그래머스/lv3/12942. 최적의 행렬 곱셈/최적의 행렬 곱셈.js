function solution(matrix_sizes) {
  const LENGTH = matrix_sizes.length
  const dp = Array.from(new Array(LENGTH), () =>
    new Array(LENGTH).fill(Infinity)
  )

  dp.forEach((_, index) => (dp[index][index] = 0))

  for (let i = 1; i < LENGTH; i++) {
    for (let start = 0; start < LENGTH; start++) {
      const end = start + i

      if (end >= LENGTH) {
        break
      }

      for (let fixed = start; fixed < end; fixed++) {
        dp[start][end] = Math.min(
          dp[start][end],
          dp[start][fixed] +
            dp[fixed + 1][end] +
            matrix_sizes[start][0] *
              matrix_sizes[fixed + 1][0] *
              matrix_sizes[end][1]
        )
      }
    }
  }

  return dp[0][LENGTH - 1]
}
