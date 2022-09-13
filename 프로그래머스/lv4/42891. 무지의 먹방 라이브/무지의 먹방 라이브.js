function solution(food_times, k) {
  const FAIL = -1
  const SIZE = food_times.length
  const foods = food_times
    .map((time, index) => ({ time, id: index + 1 }))
    .sort((a, b) => a.time - b.time)

  let prevTime = 0

  for (let i = 0; i < SIZE; i++) {
    const currentTime = foods[i].time
    const remainCount = SIZE - i
    const eatTime = (currentTime - prevTime) * remainCount

    if (eatTime > k) {
      const remainFoods = foods.slice(i).sort((a, b) => a.id - b.id)

      return remainFoods[k % remainCount].id
    }

    prevTime = currentTime
    k -= eatTime
  }

  return FAIL
}
