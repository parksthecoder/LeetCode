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
  //! O(1) runtime
  insert(value, isMatch = (node, index) => index === this.length - 1) {
    // isMatch defaulted to the last node
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
    return this.findWithPrevious(isMatch)[0];

    //! since findWithPrevious() was identically functioning just call findWithPrevious() with isMatch returning the first result [0]
    // let index = 0;
    // let node = this.head;
    // while (node) {
    //   if (isMatch(node, index)) {
    //     return node;
    //   }
    //   index++;
    //   node = node.next;
    // }
    // return null;
  }

  /**
   * Find a node, and its previous node in the linked list
   * @param {*} isMatch
   *    Function that returns 'true' if the current node matches
   * @returns {[Node|null, Node|null]}
   *    The first element is the node where 'isMatch(node, index)
   *    The second element is the previous Node, or null if no match
   *    This second element is also 'null' if 'this.head' is the match
   */
  //! both find() and findWithPrevious() start iteration from the head of the list
  findWithPrevious(isMatch) {
    let index = 0; // index of current node is tracked
    let previous = null; // previous node of current node is tracked
    let node = this.head; // node starts at head
    while (node) {
      // goes over each node looking for condtions from isMatch(node, index)
      if (isMatch(node, index)) {
        // isMatch is a condtions for node or index
        return [node, previous]; // returns current node and its previous node
      }
      index++; // each node is tracked until match is found
      previous = node;
      node = node.next;
    }
    return [null, null]; // default condtions if a match is not found
  }

  /**
   * Remove the first node where isMatch(node, index, this) === true
   *
   * @param {*} isMatch
   *   Function that returns true if the current node matches the node to be removed
   * @returns {*}
   *  The value of the removed node, where isMatch(node, index) === true, or null if no match is found
   */
  remove(isMatch) {
    const [matchedNode, previousNode] = this.findWithPrevious(isMatch);

    if (!matchedNode) {
      return null;
    }

    if (this.head === matchedNode) {
      this.head = this.head.next;
    } else {
      previousNode.next = matchedNode.next;
    }
    return matchedNode.value;
  }

  linkedListToArray() {
    const array = [];
    let node = this.head;
    while (node !== null) {
      array.push(node.value);
      node = node.next;
    }
    return array;
  }
}

module.exports = LinkedList;

// example manually building a linkedList ONLY using the Node class (not using LinkedList)
// for explanation only. use LinkedList by importing it instead

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

//! printing a linked list
// non-recursive
// const printLinkedList = (head) => {
//   let current = head;
//   while (current !== null) {
//     console.log(current.value)
//     current = current.next
//   }
// }

// Recursive function (same funtionality as above)
const printLinkedList = (head) => {
  if (head === null) return; // base case
  console.log(head.value, "==>");
  printLinkedList(head.next); // recursive case
};

printLinkedList(a);

//! linked list to array
// non-recursive linked list to array
const linkedListToArray = (head) => {
  const array = [];
  let node = head;
  while (node !== null) {
    array.push(node.value);
    node = node.next;
  }
  return array;
};

// Recursive linked list to array (same functinality as above)

const recursiveLinkedListToArray = (head) => {
  const values = []
  fillValues(head, values)
  return values
}

const fillValues = (head, values) => {  // separate helper function helps run time complexity
  if (head === null) return
  values.push(head.value)
  fillValues(head.next, values)
}

console.log(recursiveLinkedListToArray(a))
