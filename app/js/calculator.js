import { changeSign, percent } from './arithmetic_functions.js';
import calculate from './calculate.js';
import { clearScreen, showOnScreen } from './screen_functions.js';

class Calculator {
  BUTTONS = {
    operation: this.handleOperation.bind(this),
    number: this.handleNumber.bind(this),
    point: this.handlePoint.bind(this),
    '=': this.handleEqual.bind(this),
    ac: this.handleAc.bind(this),
    '+-': this.handleChangeSign.bind(this),
    '%': this.handlePercent.bind(this),
  };

  constructor() {
    this.expression = [];
    this.currentNumber = '0';
  }

  handle(type, value) {
    ['operation', 'number'].includes(type) ? this.BUTTONS[type](value) : this.BUTTONS[type]();
  }

  handleOperation(value) {
    if (this.currentNumber != '') {
      this.expression.push(this.currentNumber);
    }
    this.expression.push(value);
    this.currentNumber = '';

    showOnScreen(this.expression);
  }

  handleNumber(value) {
    if (this.currentNumber === '') {
      this.currentNumber = value;

      if (this.expression.length > 0) {
        let last_element_of_array = this.expression[this.expression.length - 1];
        if (!isNaN(last_element_of_array)) {
          this.expression.pop();
        }
      }
    } else if (this.currentNumber === '0') {
      this.currentNumber = value;
    } else if (this.currentNumber !== '0' && !isNaN(this.currentNumber)) {
      this.currentNumber += value;
    }

    showOnScreen(this.expression + this.currentNumber);
  }

  handlePoint() {
    if (this.currentNumber != '' && !this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }

    showOnScreen(this.expression + this.currentNumber);
  }

  handleEqual() {
    if (this.currentNumber != '') {
      this.expression.push(this.currentNumber);
      this.currentNumber = '';
    }

    let result = calculate(this.expression);

    this.expression = [result];
    showOnScreen(result + '');
  }

  handleAc() {
    clearScreen();

    this.currentNumber = '0';
    this.expression = [];
  }

  handleChangeSign() {
    if (!['0', '', '0.'].includes(this.currentNumber)) {
      // if currentNumber is not 0 and not empty
      this.currentNumber = changeSign(parseFloat(this.currentNumber)) + '';
      showOnScreen(this.expression + this.currentNumber);
    } else if (this.currentNumber === '' || this.currentNumber === '0') {
      // if currentNumber is empty or 0
      if (this.expression.length > 0) {
        let last_element_of_array = this.expression[this.expression.length - 1];
        if (!isNaN(last_element_of_array)) {
          // if last element is number
          last_element_of_array = changeSign(parseFloat(last_element_of_array));
          this.expression[this.expression.length - 1] = last_element_of_array;
          showOnScreen(this.expression);
        }
      }
    }
  }

  handlePercent() {
    if (!['0', '', '0.'].includes(this.currentNumber)) {
      this.currentNumber = percent(parseFloat(this.currentNumber)) + '';
    } else if (this.expression.length > 0 && !isNaN(this.expression[this.expression.length - 1])) {
      this.expression[this.expression.length - 1] =
        percent(parseFloat(this.expression[this.expression.length - 1])) + '';
    }

    showOnScreen(this.expression + this.currentNumber);
  }
}

export default Calculator;
