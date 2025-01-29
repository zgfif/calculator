import themes from './themes.js';
import { setValueCssVariable } from './css_variables.js';

function applyTheme(themeName) {
  if (typeof themeName !== 'string') {
    throw new Error('The provided theme name must be a string.');
  }

  if (!Object.keys(themes).includes(themeName)) {
    throw new Error(`The theme '${themeName}' does not exist. Please choose a valid theme.`);
  }

  const theme = themes[themeName];

  for (const [key, value] of Object.entries(theme)) {
    setValueCssVariable(key, value);
  }
}

export default applyTheme;
