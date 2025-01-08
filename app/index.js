import './styles.css';

import { calculate } from './js/calculate.js';
import { changeSign, percent } from './js/ariphmetic_functions.js';
import { toggleTheme } from './js/toggle_theme.js';

document.addEventListener('DOMContentLoaded', function () {
  const btns = document.querySelectorAll('.btn');
  const themeBtn = document.querySelector('#themeButton');

  let expression = [];
  let currentNumber = '0';

  for (const btn of btns) {
    btn.addEventListener('click', function (event) {
      let typeOfButton = event.target.getAttribute('data-type'),
        value = event.target.getAttribute('data-value');

      if (typeOfButton == 'operation') {
        if (currentNumber != '') {
          expression.push(currentNumber);
          expression.push(value);
          currentNumber = '';

          showOnScreen(expression + currentNumber);
        } else {
          expression[expression.length - 1] = value;
          showOnScreen(expression);
        }
      } else if (typeOfButton == 'number') {
        if (currentNumber == '0') {
          currentNumber = value;
        } else {
          currentNumber += value;
        }
        showOnScreen(expression + currentNumber);
      } else if (typeOfButton == 'point') {
        if (currentNumber != '' && !currentNumber.includes('.')) {
          currentNumber += value;
          showOnScreen(expression + currentNumber);
        }
      } else if (typeOfButton == '=') {
        if (currentNumber != '') {
          expression.push(currentNumber);
        }

        let result;
        result = calculate(expression);
        expression = [];
        currentNumber = result + '';

        showOnScreen(result + '');
      } else if (typeOfButton == 'ac') {
        expression = [];
        currentNumber = '0';
        clearScreen();
      } else if (typeOfButton == '+-') {
        if (currentNumber != '0') {
          let res;
          res = changeSign(parseFloat(currentNumber));
          currentNumber = res;
          showOnScreen(res);
        }
      } else if (typeOfButton == '%') {
        let res = '';
        res = percent(parseFloat(currentNumber));
        currentNumber = res;
        showOnScreen(res);
      }
    });
  }

  themeBtn.addEventListener('click', toggleTheme);
});

function clearScreen() {
  document.querySelector('#input_field').textContent = '0';
}

function showOnScreen(text = '') {
  if (text != '') {
    document.querySelector('#input_field').textContent = text;
  }
}
