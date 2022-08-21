function Node(data) {
  this.data = data
  this.next = null
}

function Queue() {
  this.head = null
  this.tail = null

  this.push = (data) => {
    const node = new Node(data)

    if (!this.head) {
      this.head = node
      this.tail = node

      return
    }

    this.tail.next = node
    this.tail = node
  }

  this.pop = () => {
    const popped = this.head.data

    this.head = this.head.next

    if (this.head === null) {
      this.tail = null
    }

    return popped
  }
}

function solution(queue1, queue2) {
  const CAN_NOT_SAME = -1
  let sum1 = queue1.reduce((acc, cur) => (acc += cur))
  let sum2 = queue2.reduce((acc, cur) => (acc += cur))
  const total = sum1 + sum2

  if (total % 2 !== 0) {
    return CAN_NOT_SAME
  }

  let count = 0

  const q1 = new Queue()
  const q2 = new Queue()

  queue1.forEach((number) => q1.push(number))
  queue2.forEach((number) => q2.push(number))

  while (sum1 !== sum2) {
    count++

    if (count > (queue1.length + queue2.length) * 2) {
      return CAN_NOT_SAME
    }

    if (sum1 < sum2) {
      q1.push(q2.pop())
      sum1 += q1.tail.data
      sum2 -= q1.tail.data

      continue
    }

    q2.push(q1.pop())
    sum1 -= q2.tail.data
    sum2 += q2.tail.data
  }

  return count
}
