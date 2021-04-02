class TreeNode {
  constructor(value) {
    this.value = value;
    this.count = 1;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // add value
  insertNode(value) {
    if (!this.root) {
      // first elem
      root = new TreeNode(value);
    } else {
      // traverse down and insert it
      this._insertHelper(root, value);
    }
    // return the whole tree
    return this;
  }

  // insertion recursive helper
  _insertHelper(node, value) {
    if (node.value === value) {
      // value there already
      node.count += 1;
    } else if (node.value < value) {
      // greater to the right
      if (!node.right) {
        // open spot
        node.right = new TreeNode(value);
      } else {
        // non null means recurse right
        this._insertHelper(node.right, value);
      }
    } else if (node.value > value) {
      // smaller to the left
      if (!node.left) {
        // open spot
        node.left = new TreeNode(value);
      } else {
        // non null means recurse left
        this._insertHelper(node.left, value);
      }
    }
  }

  // check if value there
  contains(value) {
    return this.containsHelper(this.root, value);
  }

  // contains recursive helper
  _containsHelper(node, value) {
    // not here confirmed
    if (!node) return false;
    if (node.value === value) {
      // there she is
      return true;
    } else if (node.value < value) {
      // greater to the right
      return this._containsHelper(node.right, value);
    } else {
      // smaller to the left
      return this._containsHelper(node.left, value);
    }
  }

  // is node a leaf
  _isLeaf(node) {
    if (!node) return false;
    return !node.left && !node.right;
  }

  // remove a node
  remove(value) {
    // new tree basically
    this.root = this._removeHelper(this.root, value);
    return this;
  }

  // remove recursive helper
  _removeHelper(node, value) {
    // empty (sub)tree
    if (!node) return null;
    // found value to delete
    if (node.value === value) {
      node.count -= 1;
      // if count is zero, that's it
      if (!node.count) {
        if (this._isLeaf(node)) {
          node = null;
        } else if (!node.right) {
          // had only a left child, make parent
          node = node.left;
        } else if (!node.left) {
          // had only a right child, make parent
          node = node.right;
        } else {
          // 2 children means:
          /* 
            - find in-order successor of node to remove
              (this is the smallest value in right subtree)
            - that's the value for current node
            - update current's right subtree with deleted in-order
              successor (the one we just moved!)
          */
          // do the thing
          let smallestInRight = this._kthSmallestNode(node.right);
          node.value = smallestInRight.value;
          // do the other thing
          node.right = this._removeHelper(node.right, smallestInRight.value);
        }
      } else if (node.value < value) {
        // greater to the right
        node.right = this._removeHelper(node.right, value);
      } else if (node.value > value) {
        // smaller to the left
        node.left = this._removeHelper(node.left, value);
      }
    }
    // (sub)tree root
    return node;
  }

  // find smallest node
  _kthSmallestNode(node) {
    if (!node.left) return null;
    return this._kthSmallestNode(node.left);
  }
}
