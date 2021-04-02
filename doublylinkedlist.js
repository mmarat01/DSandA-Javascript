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

  // adds to the front
  addNodeFront(value) {
    // prev to nothing, next to curr head
    const node = new DoublyNode(value, null, this.head);
    // new first elem
    if (!this.head) {
      // also the tail
      this.tail = node;
    } else {
      // before the head
      this.head.prev = node;
    }
    // either way, new head
    this.head = node;
    this.length += 1;
    return node;
  }

  // adds to the back
  addNodeBack(value) {
    // prev to curr tail, next to thing
    const node = new DoublyNode(value, this.tail, null);
    // new first elem
    if (!this.head) {
      // also the head
      this.head = node;
    } else {
      // after the tail
      this.tail.next = node;
    }
    // either way, new tail
    this.tail = node;
    this.length += 1;
    return node;
  }

  // insert data at given index
  addNode(index, value) {
    if (index < 0 || index > this.length) {
      // nah
      throw new RangeError(`Cannot insert node at index ${index}`);
    } else if (index === 0) {
      // new head
      return this.addNodeFront(value);
    } else if (index === this.length) {
      // new tail
      return this.addNodeBack(value);
    } else {
      // node before
      const prevNode = this.findNode(index - 1);
      // node that will be pushed rightwards
      const nextNode = this.findNode(index);
      // new node
      const node = new DoublyNode(value, prevNode, nextNode);
      // connect
      prevNode.next = node;
      nextNode.prev = node;
      // that's it
      this.length += 1;
      return node;
    }
  }

  // remove node from front
  deleteNodeFront(value) {
    // nothing to delete
    if (!this.head) return null;
    // deleting curr head
    const node = this.head;
    if (this.length === 1) {
      // only 1 elem means all null
      this.head = this.tail = null;
    } else {
      // new head is whatever came after old head
      this.head = node.next;
      // make sure old head.next points to nothing
      node.next = null;
      // new head.prev must point to nothing
      this.head.prev = null;
    }
    this.length -= 1;
    return node;
  }

  // remove node from back {
  deleteNodeBack(value) {
    // nothing to delete
    if (!this.head) return null;
    // deleting curr tail
    const node = this.tail;
    if (this.length === 1) {
      // only 1 elem means all null
      this.head = this.tail = null;
    } else {
      // new tail is whatever came before old tail
      this.tail = node.prev;
      // make sure old head.prev points to nothing
      node.prev = null;
      // new tail.next must point to nothing
      this.tail.next = null;
    }
    this.length -= 1;
    return node;
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

  // get data from node at index
  getValue(index) {
    let node = this.findNode(index);
    let data = node ? node.value : undefined;
    return data;
  }
}
