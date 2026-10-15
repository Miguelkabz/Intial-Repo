/**
 * Given the following array
 */
let fruits = ["apple", "banana", "mango"];

/**
 * 1. Remove the first element ("apple") using splice and store it in a variable
 */
let removed = fruits.splice(0,1);  // splice returns an array, so take [0] //(starting index, number of elements to remove)
console.log("Removed:", removed);       // "apple"
console.log("Fruits after splice:", fruits); // ["banana", "mango"]

/**
 * 2. Copy the last element of the array using slice and store it in a variable
 */
let last = fruits.slice(); // (starting index, ending index (not inclusive)) 
console.log("Last element:", last);     // "mango"

/**
 * 3. Given the following string "red,green,blue", convert it to an array 
 *    and make every element title case
 */
let colors = "red,green,blue".split(","); // convert to array
let titleCaseColors = colors.map(color => 
    color.charAt(0).toUpperCase() + color.slice(1)
);

console.log("Colors in title case:", titleCaseColors); 
// ["Red", "Green", "Blue"]
