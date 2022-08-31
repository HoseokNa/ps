function Node(data) {
  this.data = data
  this.prev = null
  this.next = null
}

function LinkedList() {
  this.head = null
  this.tail = null
  this.currentNode = null

  const deletedNodes = []
  const map = new Map()

  this.up = (count) => {
    while (count > 0) {
      this.currentNode = this.currentNode.prev
      count--
    }
  }

  this.down = (count) => {
    while (count > 0) {
      this.currentNode = this.currentNode.next
      count--
    }
  }

  this.push = (data) => {
    const node = new Node(data)

    map.set(data, node)

    if (!this.head) {
      this.head = node
      this.tail = node

      return
    }

    this.tail.next = node
    node.prev = this.tail
    this.tail = node
  }

  this.setCurrentNode = (k) => (this.currentNode = map.get(k))

  this.delete = () => {
    deletedNodes.push(this.currentNode)

    if (this.currentNode === this.tail) {
      this.tail = this.tail.prev
      this.tail.next = null
      this.currentNode = this.tail

      return
    }

    if (this.currentNode === this.head) {
      this.head = this.currentNode.next
      this.head.prev = null
      this.currentNode = this.head

      return
    }

    const prevNode = this.currentNode.prev
    const nextNode = this.currentNode.next

    prevNode.next = nextNode
    nextNode.prev = prevNode
    this.currentNode = nextNode
  }

  this.resotre = () => {
    const resotredNode = deletedNodes.pop()
    const prevNode = resotredNode.prev
    const nextNode = resotredNode.next

    prevNode ? (prevNode.next = resotredNode) : (this.head = resotredNode)
    nextNode ? (nextNode.prev = resotredNode) : (this.tail = resotredNode)
  }
}

function solution(n, k, cmd) {
  const COMMAND = Object.freeze({
    UP: 'U',
    DOWN: 'D',
    CUT: 'C',
    RESTORE: 'Z',
  })

  const list = new LinkedList()

  for (let i = 0; i < n; i++) {
    list.push(i)
  }

  list.setCurrentNode(k)

  cmd.forEach((cmd) => {
    const [command, count] = cmd.split(' ')

    switch (command) {
      case COMMAND.UP:
        list.up(parseInt(count, 10))
        break
      case COMMAND.DOWN:
        list.down(parseInt(count, 10))
        break
      case COMMAND.CUT:
        list.delete()
        break
      case COMMAND.RESTORE:
        list.resotre()
        break
    }
  })

  const answer = new Array(n).fill('X')
  let currentNode = list.head

  while (currentNode) {
    answer[currentNode.data] = 'O'
    currentNode = currentNode.next
  }

  return answer.join('')
}
