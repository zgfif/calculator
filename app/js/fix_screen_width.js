import { setValueCssVariable, getValueCssVariable } from './css_variables';

export function fixScreenWidth(screen, initialWidth = initialWidth) {
  const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      let currentWidth = parseInt((entry.contentRect['width'] + entry.contentRect['left'] * 2).toFixed());

      if (currentWidth > initialWidth) {
        let currentTextSize = getValueCssVariable('--screen-font-size');
        if (parseFloat(currentTextSize) >= 0.1) {
          let newTextSize = (parseFloat(currentTextSize) - 0.1).toString() + 'em';
          setTimeout(() => {
            setValueCssVariable('--screen-font-size', newTextSize);
          }, 1);
        }
      }
    }
  });

  resizeObserver.observe(screen);
}
