class Queue {
  constructor(...items) {
    this.reverse = false; // reverse ? enq at first ind deq last ind : enq at last ind deq first ind
    this.buffer = [...items];
  }

  enqueue(...items) {
    return this.reverse
      ? this.buffer.unshift(...items)
      : this.buffer.push(...items);
  }

  dequeue() {
    return this.reverse ? this.buffer.pop() : this.buffer.shift();
  }
}
