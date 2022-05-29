const LinkedList = require("./linkedList");

const linkedList = new LinkedList();

linkedList.insert("D");
linkedList.insert("A");
linkedList.insert("C");
linkedList.insert("B");

console.log(linkedList); // initial linked list to be reversed

function reverseIterative(list) {
  const reversedList = new LinkedList();
  let node = list.head; // starting iteration at the head of list
  while (node) {        // while a node exists - add that value to the reversedList
    reversedList.insertAtHead(node.value);
    node = node.next;   // iterate to the next node
  }
  return reversedList;
}

console.log(reverseIterative(linkedList));

