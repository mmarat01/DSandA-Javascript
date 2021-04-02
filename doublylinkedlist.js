class DoublyNode {
  constructor(value, prev, next) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // search for node and get it
  findNode(index) {
    // find existing node
    if (this.head && index >= 0 && index < this.length - 1) {
      let currNode = this.head;
      let i = 0;
      while (currNode && i < index) {
        currNode = currNode.next;
        i++;
      }
      return currNode;
    }
    return null;
  }

  // adds to the back
  addNodeBack(value) {
    const node = new DoublyNode(value, this.tail, null);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length += 1;
    return node;
  }

  // adds to the front
  addNodeFront(value) {
    const node = new DoublyNode(value, null, this.head);
    if (!this.head) {
      this.tail = node;
    } else {
      this.head.prev = node;
    }
    this.head = node;
    this.length += 1;
    return node;
  }

  // remove node from front
  deleteNodeFront(value) {
    if (!this.head) return null;
    const node = this.head;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = node.next;
      // tidy up
      node.next = null;
      this.head.prev = null;
    }
    this.length -= 1;
    return node;
  }

  // remove node from back {
  deleteNodeBack(value) {
    if (!this.head) return null;
    const node = this.tail;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = node.prev;
      node.prev = null;
      this.tail.next = null;
    }
    this.length -= 1;
    return node;
  }
  // insert data at given index
  // remove node at given index

  // get data from node at index
  getValue(index) {
    let node = this.findNode(index);
    let data = node ? node.value : undefined;
    return data;
  }

  // removes a node at given index
  deleteNode(index) {
    // special case
    if (!this.head || index < 0 || index > this.length - 1) {
      throw new RangeError(`Index ${index} not on the list`);
    }
    // deleting first
    if (index === 0) {
      // get its value
      const data = this.head.value;
      // new head is next
      this.head = this.head.next;
      // if that was the only node
      if (!this.head) {
        this.tail = null;
      } else {
        this.head.prev = null;
      }

      return data;
    }

    let node = this.findNode(index);
    if (node) {
      // skip skip skip
      node.prev.next = node.next;
      // deleted last one?
      if (this.tail === node) {
        // 1 before node is new tail
        this.tail = node.prev;
      } else {
        // skip
        node.next.prev = node.prev;
      }
      return node.value;
    }
    throw new RangeError(`Index ${index} not on the list`);
  }
}
