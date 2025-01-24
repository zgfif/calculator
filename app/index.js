import './styles.css';

import toggleTheme from './js/toggle_theme.js';
import { gruveboxTheme, greenTheme } from './js/themes.js';
import Calculator from './js/calculator.js';

// wait until all DOM loaded
document.addEventListener('DOMContentLoaded', function () {
  const btns = document.querySelectorAll('.btn'),
    themeBtn = document.querySelector('#themeButton'),
    screen = document.querySelector('#input_field'),
    myCalculator = new Calculator();

  // for each button we attach 'click' event listener
  for (const btn of btns) {
    btn.addEventListener('click', function (event) {
      // get "type" of button and "value" of button
      const typeOfButton = event.target.getAttribute('data-type'),
        value = event.target.getAttribute('data-value');

      myCalculator.handle(typeOfButton, value);
    });
  }

  // toggle theme after clicking on button
  themeBtn.addEventListener('click', () => toggleTheme(gruveboxTheme, greenTheme));
});
