function solution(sticker) {
  const SIZE = sticker.length

  if (SIZE === 1) {
    return sticker[0]
  }

  // 0번 땠을 때
  const dp1 = Array(SIZE).fill(0)
  // 0번 안 떘을 때
  const dp2 = Array(SIZE).fill(0)

  dp1[0] = sticker[0]
  dp1[1] = dp1[0]
  dp2[1] = sticker[1]

  for (let i = 2; i < SIZE - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i])
  }

  for (let i = 2; i < SIZE; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i])
  }

  return Math.max(dp1[SIZE - 2], dp2[SIZE - 1])
}
