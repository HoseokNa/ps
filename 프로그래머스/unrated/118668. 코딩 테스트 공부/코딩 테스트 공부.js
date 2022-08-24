function solution(alp, cop, problems) {
  const MAX = 150
  let maxAlp = -1
  let maxCop = -1

  problems.forEach(([alp_req, cop_req]) => {
    maxAlp = Math.max(alp_req, maxAlp)
    maxCop = Math.max(cop_req, maxCop)
  })

  if (maxAlp < alp) {
    alp = maxAlp
  }

  if (maxCop < cop) {
    cop = maxCop
  }

  const dp = Array.from(new Array(MAX + 2), () =>
    new Array(MAX + 2).fill(Infinity)
  )

  dp[alp][cop] = 0

  let min = Infinity

  for (let i = alp; i <= maxAlp; i++) {
    for (let j = cop; j <= maxCop; j++) {
      dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j] + 1)
      dp[i][j + 1] = Math.min(dp[i][j + 1], dp[i][j] + 1)

      problems.forEach(([alp_req, cop_req, alp_rwd, cop_rwd, cost]) => {
        if (alp_req > i || cop_req > j) {
          return
        }

        const nextAlp = Math.min(i + alp_rwd, maxAlp)
        const nextCop = Math.min(j + cop_rwd, maxCop)

        dp[nextAlp][nextCop] = Math.min(dp[nextAlp][nextCop], dp[i][j] + cost)
      })
    }
  }

  return dp[maxAlp][maxCop]
}
