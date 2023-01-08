function solution(users, emoticons) {
  const DISCOUNT_RATES = [10, 20, 30, 40]
  const EMOTICONS_LENGTH = emoticons.length
  let maxPlusUserCount = 0
  let maxPriceSum = 0

  const calculate = (discountRates) => {
    let plusUserCount = 0
    let priceSum = 0

    users.forEach(([targetDiscount, targetSum]) => {
      const sum = emoticons.reduce((acc, cur, index) => {
        const currenctDiscount = discountRates[index]

        if (targetDiscount > currenctDiscount) {
          return acc
        }

        const price = cur - cur * (currenctDiscount / 100)

        return (acc += price)
      }, 0)

      if (sum >= targetSum) {
        plusUserCount++
      } else {
        priceSum += sum
      }
    })

    if (plusUserCount > maxPlusUserCount) {
      maxPlusUserCount = plusUserCount
      maxPriceSum = priceSum

      return
    }

    if (plusUserCount === maxPlusUserCount && priceSum > maxPriceSum) {
      maxPlusUserCount = plusUserCount
      maxPriceSum = priceSum
    }
  }

  const dfs = (index, discountRates) => {
    if (index === EMOTICONS_LENGTH) {
      calculate(discountRates)

      return
    }

    for (let i = 0; i < DISCOUNT_RATES.length; i++) {
      dfs(index + 1, [...discountRates, DISCOUNT_RATES[i]])
    }
  }

  dfs(0, [])

  return [maxPlusUserCount, maxPriceSum]
}
