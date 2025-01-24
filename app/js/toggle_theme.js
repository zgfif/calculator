import { getValueCssVariable, setValueCssVariable } from './css_variables.js';

function toggleTheme(theme1, theme2) {
  for (let [key, value] of Object.entries(theme1)) {
    const currentValue = getValueCssVariable(key);

    let newValue = currentValue == value ? theme2[key] : theme1[key];

    setValueCssVariable(key, newValue);
  }
}

export default toggleTheme;
