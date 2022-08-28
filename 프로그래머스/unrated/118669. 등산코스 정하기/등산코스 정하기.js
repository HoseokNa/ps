function solution(n, paths, gates, summits) {
  const graph = Array.from(new Array(n + 1), () => [])

  paths.forEach(([from, to, cost]) => {
    if (gates.includes(from)) {
      graph[from].push({ next: to, cost })

      return
    }

    if (gates.includes(to)) {
      graph[to].push({ next: from, cost })

      return
    }

    if (summits.includes(from)) {
      graph[to].push({ next: from, cost })

      return
    }

    if (summits.includes(to)) {
      graph[from].push({ next: to, cost })

      return
    }

    graph[from].push({ next: to, cost })
    graph[to].push({ next: from, cost })
  })

  let answer = [Infinity, Infinity]

  const dijkstra = () => {
    const intensities = Array(n + 1).fill(Infinity)
    const q = []

    gates.forEach((gate) => {
      intensities[gate] = 0
      q.push(gate)
    })

    while (q.length > 0) {
      const current = q.shift()
      graph[current].forEach(({ next, cost }) => {
        if (intensities[next] <= Math.max(intensities[current], cost)) {
          return
        }

        intensities[next] = Math.max(intensities[current], cost)
        q.push(next)
      })
    }

    return intensities
  }

  const intensities = dijkstra()

  summits.sort((a, b) => a - b)
  summits.forEach((summit) => {
    const cost = intensities[summit]

    if (cost < answer[1]) {
      answer = [summit, cost]
    }
  })

  return answer
}
