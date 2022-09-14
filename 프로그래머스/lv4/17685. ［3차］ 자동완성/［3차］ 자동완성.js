function solution(words) {
  const trie = new Map()

  words.forEach((word) => {
    let currentTrie = trie

    for (const char of word) {
      if (currentTrie.has(char)) {
        const { count, trie } = currentTrie.get(char)

        currentTrie.set(char, { count: count + 1, trie })
      } else {
        currentTrie.set(char, { count: 1, trie: new Map() })
      }

      currentTrie = currentTrie.get(char).trie
    }
  })

  return words.reduce((acc, cur) => {
    let currentTrie = trie
    let count = 0

    for (const char of cur) {
      count++

      if (currentTrie.get(char).count === 1) {
        break
      }

      currentTrie = currentTrie.get(char).trie
    }

    return (acc += count)
  }, 0)
}