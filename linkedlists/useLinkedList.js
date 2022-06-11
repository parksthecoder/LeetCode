const LinkedList = require("./linkedList")

const linkedList = new LinkedList() // invoking new linkedList

// linkedList.insertAtHead("One")
// linkedList.insertAtHead(2)
linkedList.insert("One")           // insert() will use the last node as the isMatch value by default inserting at the end by default
linkedList.insert(2)
linkedList.insert(3)

// console.log(linkedList);
// console.log(linkedList.length)

//! linked list functionalty requires node.value or node.index conditionals

// //* can use the find() method to update the value of a node in the list
linkedList.find((node) => node.value === "One").value = 1  // where value is "One" change to 1

console.log(linkedList)

//* use find() to find a node by its value given conditional
console.log(
    "find 2",
    linkedList.find((node) => node.value === 2)
)

console.log(
    "find 3",
    linkedList.find((node) => node.value === 3)
)

//* can find a node by index as follows
console.log(linkedList.find((node, index) => index === 0))
console.log(linkedList.find((node, index) => index === 1))

//* insert AFTER a certain given value / index
linkedList.insert(1.5, (node) => node.value === 1)
console.log(linkedList)

//* remove a node given a conditional for the node.value or node.index
linkedList.remove((node) => node.value === 1)   // in parenthesis is the isMatch() input for the remove() functionality of the linked list
console.log(linkedList)


const printLinkedList = () => {
    let current = linkedList.head;
    while (current !== null) {
        console.log(current.value)
        current = current.next;
    }
}

printLinkedList()

//* linked list into an array
const linkedListArray = linkedList.linkedListToArray();
console.log(linkedListArray)


