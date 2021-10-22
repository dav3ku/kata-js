class Calculator {
  constructor() {}

  plus(firstNumber) {
    return function (secondNumber) {
      return firstNumber + secondNumber;
    };
  }

  minus(firstNumber) {
    return function (secondNumber) {
      return secondNumber - firstNumber;
    };
  }

  times(firstNumber) {
    return function (secondNumber) {
      return firstNumber * secondNumber;
    };
  }

  dividedBy(firstNumber) {
    return function (secondNumber) {
      return secondNumber / firstNumber;
    };
  }
}

var calculator = new Calculator();

console.log(calculator.plus(5)(10));
