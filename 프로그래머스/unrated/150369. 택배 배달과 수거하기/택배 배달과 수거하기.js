function solution(cap, n, deliveries, pickups) {
  let sum = 0
  const deliveriesQ = deliveries
    .map((count, index) => ({ count, length: index + 1 }))
    .filter(({ count }) => count !== 0)

  const pickupsQ = pickups
    .map((count, index) => ({ count, length: index + 1 }))
    .filter(({ count }) => count !== 0)

  while (deliveriesQ.length > 0 || pickupsQ.length > 0) {
    let deliveryLength = 0
    let pickupLength = 0

    if (deliveriesQ.length > 0) {
      let deliveryCap = cap

      if (deliveriesQ.length > 0) {
        deliveryLength = deliveriesQ[deliveriesQ.length - 1].length
      }

      while (deliveryCap > 0) {
        if (deliveriesQ.length === 0) {
          break
        }

        deliveriesQ[deliveriesQ.length - 1].count--
        deliveryCap--

        if (deliveriesQ[deliveriesQ.length - 1].count === 0) {
          deliveriesQ.pop()
        }
      }
    }

    if (pickupsQ.length > 0) {
      let pickupCap = cap

      if (pickupsQ.length > 0) {
        pickupLength = pickupsQ[pickupsQ.length - 1].length
      }

      while (pickupCap > 0) {
        if (pickupsQ.length === 0) {
          break
        }

        pickupsQ[pickupsQ.length - 1].count--
        pickupCap--

        if (pickupsQ[pickupsQ.length - 1].count === 0) {
          pickupsQ.pop()
        }
      }
    }

    sum += Math.max(deliveryLength, pickupLength) * 2
  }

  return sum
}
