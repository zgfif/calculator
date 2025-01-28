import applyTheme from '../app/js/apply_theme.js';
import { getValueCssVariable } from '../app/js/css_variables.js';
import assert from 'assert';
import jsdomGlobal from 'jsdom-global';

let cleanup;

describe('applyTheme', () => {
  before(() => {
    cleanup = jsdomGlobal();
  });

  it('should apply the theme', () => {
    assert.equal(getValueCssVariable('--window-bg-color'), '');

    applyTheme('lime');

    assert.equal(getValueCssVariable('--window-bg-color'), 'green');
  });

  it('should change theme from lime to gruvebox', () => {
    assert.equal(getValueCssVariable('--window-bg-color'), 'green');

    applyTheme('gruvebox');

    assert.equal(getValueCssVariable('--window-bg-color'), 'rgb(42, 42, 42)');
  });

  after(() => {
    cleanup();
  });
});
