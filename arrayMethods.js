// alert("I am JavaScript");


const fruits = ["banana", "apple", "strawberry", "cherry", "watermelon"]

//* looping over an array and manipulating
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i] + " Ice Cream");
// }

//* accessing array by indices
// console.log(fruits[0]);
// console.log(fruits[3]);

// console.log(fruits);

//! push() method
//* => adds element to end
// fruits.push("pineapple"); // add pineapple to end
// console.log(fruits);

//! pop() method
//* => removes element from end
// fruits.pop();             // removes "pineapple" from end
// console.log(fruits);

//! unshift() method
//* => adds element to beginning
// fruits.unshift("pineapple"); // add "pineapple" to beginning of array
// console.log(fruits);

//! shift() method 
//* => removes element from beginning
// fruits.shift();              // removes "pineapple" from beginning
// console.log(fruits);

//! splice() method --> Modifies Original Array
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


//! 