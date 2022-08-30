function solution(begin, end) {
  const MAX_BLOCK_NUMBER = 10000000
  const getBlockNumberByPosition = (position) => {
    if (position === 1) {
      return 0
    }

    const mid = Math.sqrt(position)

    for (let i = 2; i <= mid; i++) {
      const blockNumber = position / i

      if (position % i === 0 && blockNumber <= MAX_BLOCK_NUMBER) {
        return blockNumber
      }
    }

    return 1
  }

  return Array.from(new Array(end - begin + 1), (_, index) =>
    getBlockNumberByPosition(begin + index)
  )
}
