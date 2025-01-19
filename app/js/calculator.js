import { changeSign, percent } from './arithmetic_functions.js';
import calculate from './calculate.js';
import { clearScreen, showOnScreen } from './screen_functions.js';

export class Calculator {
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
      this.expression.push(value);
      this.currentNumber = '';
    }

    showOnScreen(this.expression);
  }

  handleNumber(value) {
    if (this.currentNumber == '0') {
      this.currentNumber = value;
    } else {
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
    }

    this.currentNumber = calculate(this.expression);
    this.expression = [this.currentNumber];

    showOnScreen(this.currentNumber);
  }

  handleAc() {
    clearScreen();

    this.currentNumber = '0';
    this.expression = [];
  }

  handleChangeSign() {
    if (!['0', ''].includes(this.currentNumber)) {
      this.currentNumber = changeSign(parseFloat(this.currentNumber));
    }

    showOnScreen(this.currentNumber);
  }

  handlePercent() {
    if (!['0', ''].includes(this.currentNumber)) {
      this.currentNumber = percent(parseFloat(this.currentNumber));
    }

    showOnScreen(this.expression + this.currentNumber);
  }
}
