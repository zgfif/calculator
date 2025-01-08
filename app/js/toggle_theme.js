export function toggleTheme() {
  const r = document.querySelector(':root');
  const rs = getComputedStyle(r);

  let font_color = rs.getPropertyValue('--font-color');

  if (font_color == 'white') {
    r.style.setProperty('--font-color', 'rgb(83, 80, 80)');
  } else {
    r.style.setProperty('--font-color', 'white');
  }

  let numeric_block_bg_color = rs.getPropertyValue('--numeric-block-bg-color');

  if (numeric_block_bg_color == 'grey') {
    r.style.setProperty('--numeric-block-bg-color', 'rgb(212, 228, 201)');
  } else {
    r.style.setProperty('--numeric-block-bg-color', 'grey');
  }

  let operations_block_bg_color = rs.getPropertyValue('--operations-block-bg-color');

  if (operations_block_bg_color == 'orange') {
    r.style.setProperty('--operations-block-bg-color', '#c6ee32');
  } else {
    r.style.setProperty('--operations-block-bg-color', 'orange');
  }

  let operations_row_bg_color = rs.getPropertyValue('--operations-row-bg-color');

  if (operations_row_bg_color == 'rgb(60, 60, 60)') {
    r.style.setProperty('--operations-row-bg-color', 'rgb(161, 223, 138)');
  } else {
    r.style.setProperty('--operations-row-bg-color', 'rgb(60, 60, 60)');
  }

  let window_bg_color = rs.getPropertyValue('--window-bg-color');

  if (window_bg_color == 'rgb(42, 42, 42)') {
    r.style.setProperty('--window-bg-color', 'green');
  } else {
    r.style.setProperty('--window-bg-color', 'rgb(42, 42, 42)');
  }
}
