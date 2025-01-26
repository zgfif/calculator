import themes from './themes.js';
import { setValueCssVariable } from './css_variables.js';

function applyTheme(themeName) {
  const theme = themes[themeName];

  for (let [key, value] of Object.entries(theme)) {
    setValueCssVariable(key, value);
  }
}

export default applyTheme;
