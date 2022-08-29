function solution(n, cores) {
  let answer = -1
  const length = cores.length
  const targetCount = n - cores.length
  let left = 1
  let right = (targetCount * Math.max(...cores)) / length

  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    const sum = cores.reduce((acc, cur) => (acc += Math.floor(mid / cur)), 0)

    if (sum >= targetCount) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  let remainWorks = targetCount

  cores.forEach((core) => (remainWorks -= Math.floor((right - 1) / core)))
  cores.some((core, index) => {
    if (right % core === 0) {
      remainWorks -= 1
    }

    if (remainWorks === 0) {
      answer = index + 1

      return true
    }
  })

  return answer
}
