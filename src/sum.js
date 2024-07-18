function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function times(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    throw new Error("Division by zero error");
  }
  return a / b;
}

module.exports = { sum, sub, times, div };
