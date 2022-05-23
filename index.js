function add(a, b) { 
    return a+b
}
function subtract(a, b) {
    return a-b
}
function multiply(a, b) {
    return a*b
}
function divide(a, b) {
    return a/b
}

// now the extras

function sqrt(a) {
    Math.sqrt(a)
}
function square(a) {
    return a*a
}

// lets now export them

module.exports = add
module.exports = subtract
module.exports = multiply
module.exports = divide
module.exports = sqrt
module.exports = square