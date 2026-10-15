// let customerName = "Miguel";
// let productPrice = 500;
// let isAvailable = true;

// console.log(customerName);
// console.log(productPrice);
// console.log(isAvailable);

// const country = "Kenya";

// let studentName = "John";
// let studentAge = 20
// let isLearningCode = true;

// console.log(studentName);
// console.log(studentAge);
// console.log(isLearningCode);

// let age = 20;
// let price = 19.99;

// console.log(typeof age);   // "number"
// console.log(typeof price); // "number"

// 2 notebooks at KSh 150 each.
// 3 pens at KSh 50 each.

// Your tasks:

// Create variables for the notebook price and quantity, and the pen price and quantity.
// Calculate the total cost of the notebooks.
// Calculate the total cost of the pens.
// Calculate the total cost of everything.

// let notebookPrice = 150;
// let notebookQuantity = 2;
// let penPrice = 50;
// let penQuantity = 3;

// let totalNotebookCost = notebookPrice * notebookQuantity;
// let totalPenCost = penPrice * penQuantity;
// let totalCost = totalNotebookCost + totalPenCost;

// console.log("Total cost of notebooks: KSh " + totalNotebookCost);
// console.log("Total cost of pens: KSh " + totalPenCost);
// console.log("Total cost of everything: KSh " + totalCost);

// notebookPrice = 200;

// console.log("Updated total cost of notebooks: KSh " + (notebookPrice * notebookQuantity));



// let orderTotal = 800; // Example order total

// if (orderTotal >= 1000) {
//     console.log("You qualify for free delivery!");
// } else {
//     console.log("Delivery charges apply."); // if its below 1000 its not free delivery
// }

// // AND operator example both conditions must be true 
// let age = 20;
// let hasPaid = true;

// if (age >= 18 && hasPaid === true) {
//     console.log("Registration successful!");
// } else {
//     console.log("Registration requirements not met.");
// }

// // OR operator example one condition must be true

// let age = 19;
// let hasStudentMembership = true;

// if (age < 18 || hasStudentMembership === true) {
//     console.log("Discount available!");
// } else {
//     console.log("No discount available.");
// }

let orderTotal = 700;
let isPremiumMember = true;

if (orderTotal >= 1000 || isPremiumMember) {
    console.log("You qualify for free delivery!");
} else {
    console.log("Delivery charges apply.");
}