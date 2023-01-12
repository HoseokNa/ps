function solution(numbers) {
  const SUCCESS = 1
  const FAIL = 0
  const NODE = 1
  const DUMMY_NODE = 0
  const NO_BINARY = -1

  const getTargetLength = (currentLength) => {
    let targetLength = 1

    while (targetLength < currentLength) {
      targetLength = (targetLength + 1) * 2 - 1
    }

    return targetLength
  }

  const dfs = (binary) => {
    if (binary.length === 1) {
      return Number(binary)
    }

    const mid = (binary.length - 1) / 2
    const root = Number(binary[mid])

    const leftChild = dfs(binary.slice(0, mid))

    if (leftChild === NO_BINARY) {
      return NO_BINARY
    }

    if (root === DUMMY_NODE && leftChild === NODE) {
      return NO_BINARY
    }

    const rightChild = dfs(binary.slice(mid + 1))

    if (rightChild === NO_BINARY) {
      return NO_BINARY
    }

    if (root === DUMMY_NODE && rightChild === NODE) {
      return NO_BINARY
    }

    if (
      root === DUMMY_NODE &&
      leftChild === DUMMY_NODE &&
      rightChild === DUMMY_NODE
    ) {
      return DUMMY_NODE
    }

    return NODE
  }

  return numbers.map((number) => {
    const binary = number.toString(2)

    return dfs(binary.padStart(getTargetLength(binary.length), '0')) !==
      NO_BINARY
      ? SUCCESS
      : FAIL
  })
}
