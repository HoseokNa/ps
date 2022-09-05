function solution(s) {
  const answer = []

  s.forEach((current) => {
    const remains = []
    const array = current.split('')
    let count = 0

    for (let i = 0; i < array.length; i++) {
      const third = array[i]

      if (remains.length < 2) {
        remains.push(third)

        continue
      }

      const second = remains.pop()
      const first = remains.pop()

      if (first === '1' && second === '1' && third === '0') {
        count++

        continue
      }

      remains.push(first, second, third)
    }

    if (!count) {
      answer.push(current)

      return
    }

    const lastZeroIndex = remains.lastIndexOf('0')
    const oneOneZeros = new Array(count).fill('110')

    if (lastZeroIndex === -1) {
      answer.push([...oneOneZeros, ...remains].join(''))

      return
    }

    answer.push(
      [
        ...remains.slice(0, lastZeroIndex + 1),
        ...oneOneZeros,
        ...remains.slice(lastZeroIndex + 1),
      ].join('')
    )
  })

  return answer
}