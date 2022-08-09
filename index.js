class Stack {
  list = []

  constructor(initialList) {
    this.list = initialList
  }

  push(item) {
    this.list = [...this.list, item]
    console.log('this.list:', this.list)
    return this.list
  }

  pop() {
    this.list = this.list.length - 1
    return this.list
  }

  peek() {}
}

class Queue {}

const newStack = new Stack(['duck', 'llama'])
// newStack.push('fox')
newStack.pop()
console.log(newStack)

module.exports = { Stack, Queue }
