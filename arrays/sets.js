//! Sets 
//* => ensures no duplicate array values
// add(), clear(), delete(), has(), values()

const numbers = new Set(); // invoking a new set

//! add() set method --> O(1)
//* => add value to end of set
numbers.add(3);
numbers.add(7);
numbers.add(5);

console.log(numbers); // Set(3) { 3, 7, 5 }

//! clear() set method
//* removes ALL values from a set
// numbers.clear();
// console.log(numbers); // Set(0) {}

//! delete() method
//* removes a Specfiic value from a set
numbers.delete(7);
console.log(numbers); // Set(2) { 3, 5 }

//! has() method
//* => checks if the value exists or not
console.log(numbers.has(3)); // true
console.log(numbers.has(7)); // false

//! values() method
//* => facilitates iterating the values of the set
numbers.values();

//! Iterating the set() with values() method --> O(n)
let sum = 0;
for (let num of numbers.values()) {
    sum = sum + num;
    console.log(sum); // logs each iteration
}
console.log(sum);   // logs final result (scope outside of for loop)

// alternate iteration of set using forEach()
let sumTwo = 0;
numbers.forEach((num) => (sumTwo = sumTwo + num));
console.log(sumTwo);


//! Relationship to Arrays
//* => Array to Set
// sometimes will working with a collection of values you need the methods of an Array and other times properties of a set
const studentGrades = ["B", "F", "A", "A", "D", "B", "A", "F"];
const uniqueGrades = new Set(studentGrades); // removing duplicates from Array
console.log(uniqueGrades);

for (let grade of uniqueGrades.values()) {
    console.log(grade); // "B", "F", "A", "D"
}

//* => Set to Array
const distinctGrades = [...uniqueGrades]; // declaring an array filling it with uniqueGrades set using rest operator
console.log(distinctGrades);


//! Common use --> Removing duplicates from a collection of values

// suppose you have a string and want to return only the unique characters
const word = "Data Structures";

const set = new Set(word.toLocaleLowerCase());
console.log(set, set.size); //* using size method on a set

