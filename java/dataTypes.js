// Primitive Types
let name = "Laveeza";       // String
let age = 22;                // Number
let isStudent = true;        // Boolean
let marks;                   // Undefined
let data = null;             // Null
let bigNumber = 12345678901234567890n; // BigInt
let uniqueID = Symbol("id"); // Symbol

// Non-Primitive Types
let person = { name: "Ali", age: 21 }; // Object
let fruits = ["Apple", "Banana", "Mango"]; // Array
function greet() {                      // Function
  console.log("Hello JavaScript!");
}

// Checking Data Types
console.log(typeof name);      // string
console.log(typeof age);       // number
console.log(typeof isStudent); // boolean
console.log(typeof marks);     // undefined
console.log(typeof data);      // object (special case)
console.log(typeof bigNumber); // bigint
console.log(typeof uniqueID);  // symbol
console.log(typeof person);    // object
console.log(typeof fruits);    // object (arrays are objects)
console.log(typeof greet);     // function
