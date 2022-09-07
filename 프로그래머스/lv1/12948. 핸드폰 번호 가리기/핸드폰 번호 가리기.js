function solution(phone_number) {
  const REAL_NUMBER_LENGTH = 4
  const MIN_INDEX = phone_number.length - REAL_NUMBER_LENGTH

  return phone_number
    .split('')
    .map((number, index) => (index < MIN_INDEX ? '*' : number))
    .join('')
}
