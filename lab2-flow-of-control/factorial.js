console.log("Starting factorial calculation program");
let number = 5;
console.log('Calculating the factorial for', number);

if (number < 0) {
  console.log('Factorial is not defined for negative numbers')
} else if (number == 0) {
  console.log("0! factorial is 1");
} else {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
  }
  console.log(number + "! factorial is", factorial);
}
