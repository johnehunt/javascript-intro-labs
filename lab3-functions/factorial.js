function factorial(number) {
  console.log('Calculating factorial ', number)
  if (number == 0) {
    console.log("0! factorial is 1");
  } else {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial = factorial * i;
    }
    console.log(number + "! factorial is", factorial);
  }
}

factorial(0)
factorial(1)
factorial(5)
factorial(3)
factorial(7)
