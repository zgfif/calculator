export function toggleTheme(theme1, theme2) {
  for (let [key, value] of Object.entries(theme1)) {
    const currentValue = getValueCssVariable(key);

    let newValue = currentValue == value ? theme2[key] : theme1[key];

    setValueCssVariable(key, newValue);
  }
}

function getValueCssVariable(varName) {
  const r = document.querySelector(':root'),
    rs = getComputedStyle(r);

  let value = rs.getPropertyValue(varName);

  return value;
}

function setValueCssVariable(varName, value) {
  const r = document.querySelector(':root');
  r.style.setProperty(varName, value);
}
