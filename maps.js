//! Maps
//* => very fast lookup table (useful when you need to repeatedly look up values based on their keys)
//* collection of unique key-value pairs
// set(), delete(), get(), has()

const addressBook = new Map(); // invoking an empty map
console.log(addressBook); // Map(0) {}

//! set() method    --> O(1)
//* => add a value to the map
// no keys unless explicitly added to the Map
// keys can be of any type of value, including functions, and objects
// keys may only be strings and Symbol objects
// a Map remembers the insertion order of the keys, iteration is insertion order
addressBook.set("sherlock", {
    email: "holmes@scotlandyard.com",
    address: "221B Baker Street, London",
});

console.log("set() method", addressBook);


addressBook.set("hercule", {
    email: "poirot@scotlandyard.com",
    address: "Flat 203 at 56B Whitehaaven Mansions",
});

console.log("set() method", addressBook);

//* attempting to add a second entry with the same Key results in Replacing the original value
// Keys are NEVER duplicated
addressBook.set("sherlock", {
    email: "jones@nypd.com",
    address: "13 5th Avenue, Queens",
});

console.log("set() method", addressBook);

console.log(addressBook.size); // using size property to get length of Map



//! get() method    --> O(1)
//* => retrieve a value from a map given it's key
const poirot = addressBook.get('hercule');
console.log("get() method", poirot);

//! delete() method     --> O(1)
//* => completely remove an entry from the map
addressBook.delete("sherlock");
console.log("delete() method", addressBook);


//! Iterating the Map
//* => Iterate by keys(), values(), entries()

// loop over the Keys //! keys() method
for (let key of addressBook.keys()) {
    console.log("keys() method", key);
}

// loop over the Values //! values() method
for (let value of addressBook.values()) {
    console.log("values() method", value);
}

//
const months = new Map();
months.set(0, "January");
months.set(1, "February");
months.set(2, "March");
months.set(3, "April");
months.set(4, "May");
months.set(5, "June");
months.set(6, "July");
months.set(7, "August");
months.set(8, "September");
months.set(9, "October");
months.set(10, "November");
months.set(11, "December");

// loop using //! entries() method
for (let [key, value] of months.entries()) {
    console.log(`${key +1} : ${value}`);
}

