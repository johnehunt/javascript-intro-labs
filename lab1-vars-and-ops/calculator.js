console.log("Welcome to the Calculator");

// Set up constant value
const PI = 3.14159;

// Provide the diameter of the circle
let diameter = 20;

// Calculate the circumference and radius of the circle
let circumference = PI * diameter;
console.log("The circumference of the circle is: ", circumference);

let radius = circumference / (2 * PI);
console.log("The radius of the circle is: ", radius);

// Perform a self -heck to validate the calculation
console.log("Self-check (radius == diameter /2): ", radius == diameter / 2);

// Indicate the program has finished
console.log("Thank you");
