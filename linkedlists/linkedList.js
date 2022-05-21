//! Linked List
//* => Singly Linked List - each node contains a value and exactly one reference to the next node

//* a Node is used to store values in a linked list
// any time a vlaue is added to the Linked List
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
  insert(value) {
    const newNode = new Node(value); // new node with value to insert

    if (this.head) {
      let tail = this.head; 
      while (tail.next) {   // iterate through list until the end of the list is reached
        tail = tail.next;
      }
      tail.next = newNode;  // once end of list is reached set end node's next property to the new node
    } else {
      this.insertAtHead(value); // if the list is empty insertAtHead()
    }
    return this;
  }

  
}

module.exports = LinkedList;
