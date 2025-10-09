// Primitive Comparison
let a = 5;
let b = 5;
console.log(a === b);  // true (same value)

// Non-Primitive Comparison
let obj1 = {name: "Ali"};
let obj2 = {name: "Ali"};
console.log(obj1 === obj2); // false (different memory references)

// Copy Behavior
let x = 10;
let y = x;
y = 20;
console.log(x); // 10 (unchanged)

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] (changed because same reference)
