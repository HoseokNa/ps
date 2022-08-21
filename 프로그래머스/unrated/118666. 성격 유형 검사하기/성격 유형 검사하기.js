function solution(survey, choices) {
  const ZERO_POINT_INDEX = 4
  const indicates = ['RT', 'CF', 'JM', 'AN']
  const map = new Map()

  indicates.forEach((indicate) =>
    indicate.split('').forEach((char) => map.set(char, 0))
  )

  const setPoint = (survey, choice) => {
    if (choice === ZERO_POINT_INDEX) {
      return
    }

    const [first, sercond] = survey
    const pivot = choice - ZERO_POINT_INDEX

    pivot < 0
      ? map.set(first, map.get(first) + Math.abs(pivot))
      : map.set(sercond, map.get(sercond) + pivot)
  }

  survey.forEach((currentSurvey, index) =>
    setPoint(currentSurvey, choices[index])
  )

  return indicates
    .map((indicate) => {
      const [pointA, pointB] = indicate.split('').map((char) => map.get(char))
      const [first, second] = indicate

      if (pointA === pointB) {
        return first
      }

      return pointA > pointB ? first : second
    })
    .join('')
}
