function solution(numbers) {
  return numbers.map((number) => {
    if (number % 2 === 0) {
      return number + 1
    }

    const binary = number.toString(2)

    if (!binary.includes('0')) {
      return parseInt(`10${binary.split('').slice(1).join('')}`, 2)
    }

    let lastIndex = null
    let index = binary.indexOf('0')

    while (index !== -1) {
      lastIndex = index
      index = binary.indexOf('0', lastIndex + 1)
    }

    const binaryArray = binary.split('')

    binaryArray.splice(lastIndex, 2, '1', '0')

    return parseInt(binaryArray.join(''), 2)
  })
}