function getValueCssVariable(varName) {
  const rootElement = document.querySelector(':root'),
    rootStyles = getComputedStyle(rootElement);
  return rootStyles.getPropertyValue(varName);
}

function setValueCssVariable(varName, value) {
  const rootElement = document.querySelector(':root');
  rootElement.style.setProperty(varName, value);
}

export { getValueCssVariable, setValueCssVariable };
