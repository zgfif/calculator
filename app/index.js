import './styles.css';

import { calculate } from './js/calculate.js';
import { changeSign, percent } from './js/ariphmetic_functions.js';
import { toggleTheme } from './js/toggle_theme.js';
import { setValueCssVariable } from './js/css_variables.js';
import { gruveboxTheme, greenTheme } from './js/themes.js';
import { clearScreen, showOnScreen } from './js/screen_functions.js';
import { fixScreenWidth } from './js/fix_screen_width.js';

// wait until all DOM loaded
document.addEventListener('DOMContentLoaded', function () {
  const btns = document.querySelectorAll('.btn'),
    themeBtn = document.querySelector('#themeButton'),
    screen = document.querySelector('#input_field');

  let expression = [], // this variable is used to store array of numbers and operations ['23', '+', '0.2', '/', '3']
    currentNumber = '0'; // this variable is used to store current number; currentNumber - is number which is not yet in "expression array".
  // by default, user has already entered 0 ('zero')

  // for each button we attach 'click' event listener
  for (const btn of btns) {
    btn.addEventListener('click', function (event) {
      // get "type" of button and "value" of button
      const typeOfButton = event.target.getAttribute('data-type'),
        value = event.target.getAttribute('data-value');

      if (typeOfButton == 'operation') {
        // / * - +

        if (currentNumber != '') {
          expression.push(currentNumber, value);
          currentNumber = '';
        } else {
          expression[expression.length - 1] = value;
        }

        showOnScreen(expression);
      } else if (typeOfButton == 'number') {
        // 0 1 2 3 4 5 6 7 8 9

        currentNumber = currentNumber == '0' ? value : currentNumber + value;
        showOnScreen(expression + currentNumber);
      } else if (typeOfButton == 'point') {
        // .

        if (currentNumber != '' && !currentNumber.includes('.')) {
          currentNumber += value;
          showOnScreen(expression + currentNumber);
        }
      } else if (typeOfButton == '=') {
        // =

        if (currentNumber != '') {
          expression.push(currentNumber);
        }

        let result = calculate(expression);
        expression = [];
        currentNumber = result + '';
        setValueCssVariable('--screen-font-size', '1.9em');
        showOnScreen(result + '');
      } else if (typeOfButton == 'ac') {
        // ac

        expression = [];
        currentNumber = '0';
        clearScreen();
      } else if (typeOfButton == '+-') {
        // +-

        if (currentNumber != '0') {
          currentNumber = changeSign(parseFloat(currentNumber));
          showOnScreen(currentNumber);
        }
      } else if (typeOfButton == '%') {
        // %

        currentNumber = percent(parseFloat(currentNumber));
        showOnScreen(currentNumber);
      }
    });
  }

  // toggle theme after clicking on button
  themeBtn.addEventListener('click', () => toggleTheme(gruveboxTheme, greenTheme));

  // if the width of text more than the width of screen, make smaller font size
  fixScreenWidth(screen, screen.offsetWidth);
});
