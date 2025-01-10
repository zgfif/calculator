import { setValueCssVariable } from './css_variables.js';

export function clearScreen() {
  document.querySelector('#input_field').textContent = '0';
  setValueCssVariable('--screen-font-size', '1.9em');
}

export function showOnScreen(text = '') {
  if (text != '') {
    let handled = text
      .toString()
      .replace(/,/g, '')
      .replace(/[\*\/\+\-]/g, ' $& ')
      .replace(/\./g, ',');

    document.querySelector('#input_field').textContent = handled;
  }
}
