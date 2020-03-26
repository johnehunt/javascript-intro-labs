function calculator(operator, x, y) {
    let result = 0
    if (operator == "+") {
        result = x + y
    } else if (operator == "-") {
        result = x - y
    } else if (operator == "*") {
        result = x * y
    } else if (operator == "/") {
        result = x / y
    }
    return result
}

console.log('calculator("+", 2, 3): ', calculator("+", 2, 3))
console.log('calculator("-", 2, 3): ', calculator("-", 2, 3))
console.log('calculator("*", 2, 3): ', calculator("*", 2, 3))
console.log('calculator("/", 6, 3): ', calculator("/", 6, 3))
console.log('calculator("&", 2, 3): ', calculator("&", 2, 3))