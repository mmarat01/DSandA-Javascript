class Stack {
  constructor(...items) {
    this.reverse = false; // reverse ? stack top is first index : stack top is last index
    this.buffer = [...items];
  }

  push(...items) {
    this.reverse ? this.buffer.unshift(...items) : this.buffer.push(...items);
  }

  pop() {
    this.reverse ? this.buffer.shift() : this.buffer.pop();
  }
}
