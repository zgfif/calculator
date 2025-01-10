export function getValueCssVariable(varName) {
  const r = document.querySelector(':root'),
    rs = getComputedStyle(r);

  return rs.getPropertyValue(varName);
}

export function setValueCssVariable(varName, value) {
  const r = document.querySelector(':root');
  r.style.setProperty(varName, value);
}
