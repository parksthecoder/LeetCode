// alert("I am JavaScript");

const fruits = ["banana", "apple", "strawberry", "cherry", "watermelon"];

//* looping over an array and manipulating
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i] + " Ice Cream");
// }

//* accessing array by indices
// console.log(fruits[0]);
// console.log(fruits[3]);

// console.log(fruits);

//! push()
//* => adds element to end      --> O(1)
// fruits.push("pineapple"); // add pineapple to end
// console.log(fruits);

//! pop()
//* => removes element from end     --> O(1)
// fruits.pop();             // removes "pineapple" from end
// console.log(fruits);

//! unshift()
//* => adds element to beginning    --> O(n)
// fruits.unshift("pineapple"); // add "pineapple" to beginning of array
// console.log(fruits);

//! shift()
//* => removes element from beginning   --> O(n)
// fruits.shift();              // removes "pineapple" from beginning
// console.log(fruits);

//! splice() --> Modifies Original Array
//* => The splice() methods is used to DELETE or INSERT elements at ARBITRARY positions in an Array.

//* => removes everything between two indices (no third input)
// fruits.splice(1, 3);
// console.log(fruits);
//* if third input (will replace index[] through index[] with input)
// fruits.splice(1, 3, "orange");
// console.log(fruits);

//* => inserts element at specfiic index (using 0 as second input)
// fruits.splice(2, 0, "mango"); // inserts "mango" at index [2] and moveitems after by 1
// console.log(fruits);

//* => replaces 1 element at specific index (using 1 as second input)
// fruits.splice(2, 1, "mango"); // replaces "strawberry" with "mango" at index [2]
// console.log(fruits);

//! slice() --> DOES NOT Modify Orginal Array
//* => works the same as splice() method
//splice
// var array=[1,2,3,4,5];
// console.log(array.splice(2));

//slice
// var array2=[1,2,3,4,5]
// console.log(array2.slice(2));

// console.log("----after-----");   // proving splice modifies && slice does not
// console.log(array);
// console.log(array2);

//! includes()
//* => returns a boolean if array includes a certain value
console.log(fruits.includes("banana"));
console.log(fruits.includes("orange"));

// includes(searchElement)
// includes(searchElement, fromIndex)   // fromIndex is position in array to begin search

//! concat()
//* merge two more more arrays (does not change existing arrays, returns a new array)
// if a reference object is modified, the changes are visible to both new and original arrays
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2); // can add multiple arrays to concatenate

console.log(array3);

//! entries()
//* => returns a new array iterator that contins key/value pairs for each index in the array
const a = ["a", "b", "c"];

// iterating with index AND element
for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// using a for...of loop
const arrayEntries = a.entries();

for (let element of arrayEntries) {
  console.log(element);
}

//! filter()
//* => returns filtered array based on conditional statement
const hasLetterL = fruits.filter((fruit) => fruit.includes("l"));
console.log(hasLetterL);

//! map()
//* => returns an Array / general map (often used to map info/items into React components for list)
// map builds a new array, using it when you aren't using the returned array is an anti-patterm
// if not using returned array use forEach() or for...of instead
const numArray = [1, 4, 9, 16]

const numMap = numArray.map(x => x * 2)
console.log(numMap)

//* => reformat objects in an array
const objectsArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 }
]
const reformattedArray = objectsArray.map(({key, value}) => ({ [key]: value + 10}))
console.log(reformattedArray)

//! find()
//* => find a given item of an array that matches given conditions
console.log(fruits.find((fruit) => fruit === "strawberry"))

//! reduce()
//* => 


//! Array [] into Object {}
//* => for loop to make an object from an array
const obj = {};

for (let i = 0; i < fruits.length; i++) {
    obj[i] = fruits[i]  // key = value in the object per loop
}
console.log(obj)

//* => Object.assign({}, array) to make an object from an array
const objAssign = Object.assign({}, fruits);

console.log(objAssign)

//* => spread operator to make an object from an array
const objFromSpreadOperator = {...fruits};
console.log(objFromSpreadOperator)


