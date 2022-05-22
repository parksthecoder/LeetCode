//! Linked List
//* => Singly Linked List - each node contains a value and exactly one reference to the next node

//* a Node is used to store values in a linked list
// any time a value is added to the Linked List
// --> it creates a instance of the Node class

class Node {
  constructor(value, next = null) {
    this.value = value; // value
    this.next = next; // reference to the next node in sequence
  }
}

class LinkedList {
  constructor() {
    // head indicates the beginning of the list
    this.head = null; // starts with an empty linked list, represented by head having a null value
  }

  /**
   * @returns {number}
   *  The number of nodes in the linked list
   */
  get length() {
    let result = 0;
    let node = this.head;

    while (node) {
      result++;
      node = node.next;
    }
    return result;
  }

  /**
   * Insert a new value at the head of the list
   * @param {*} value
   *    The new value to insert
   * @returns {LinkedList}
   *    this linked list so methods can be chained
   */
  insertAtHead(value) {
    this.head = new Node(value, this.head);
    return this;
  }

  /**
   * Insert a new value at the end/tail of the list
   * @param {*} value
   *    the new value to insert
   * @returns {LinkedList}
   */

  insert(value, isMatch = (node, index) => index === this.length - 1) {
    if (this.head) {
      const previousNode = this.find(isMatch);

      if (!previousNode) {
        throw new Error("No match found.");
      }

      previousNode.next = new Node(value, previousNode.next);
    } else {
      this.insertAtHead(value);
    }
    return this;
  }

  /**
   *
   * @param {*} isMatch
   *    function that returns true if current node matches conditions
   * @returns {Node|null}
   *    the first node where isMatch(node, index) === true
   *    or null if no match is found
   */
  find(isMatch) {
    let index = 0;
    let node = this.head;
    while (node) {
      if (isMatch(node, index)) {
        return node;
      }
      index++;
      node = node.next;
    }
    return null;
  }
}

module.exports = LinkedList;
