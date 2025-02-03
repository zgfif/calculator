import './styles.css';

import Calculator from './js/calculator.js';
import applyTheme from './js/apply_theme.js';
import themes from './js/themes.js';

// wait until all DOM loaded
document.addEventListener('DOMContentLoaded', function () {
  const btns = document.querySelectorAll('.btn'),
    themeBtn = document.querySelector('#themeButton'),
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

  const availableThemes = Object.keys(themes);

  // read theme from localstorage after loading the page
  let currentTheme = localStorage.getItem('theme');

  if (currentTheme == null || !availableThemes.includes(currentTheme)) {
    currentTheme = 'gruvebox';

    localStorage.setItem('theme', currentTheme);
  }

  // apply theme to body
  applyTheme(currentTheme);

  // change theme after clicking on button
  themeBtn.addEventListener('click', () => {
    currentTheme = localStorage.getItem('theme');

    let newTheme =
      currentTheme === 'lime' || currentTheme == null || !availableThemes.includes(currentTheme) ? 'gruvebox' : 'lime';

    localStorage.setItem('theme', newTheme);

    applyTheme(newTheme);
  });

  document.body.style.display = 'flex';
});
