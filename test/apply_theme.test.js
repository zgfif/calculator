import applyTheme from '../app/js/apply_theme.js';
import { getValueCssVariable } from '../app/js/css_variables.js';
import assert from 'assert';
import jsdomGlobal from 'jsdom-global';

let cleanup;

describe('applyTheme', () => {
  beforeEach(() => {
    cleanup = jsdomGlobal();
  });

  it('should apply the theme', () => {
    assert.equal(getValueCssVariable('--window-bg-color'), '');

    applyTheme('lime');

    assert.equal(getValueCssVariable('--window-bg-color'), 'green');
  });

  it('should change theme from lime to gruvebox', () => {
    assert.equal(getValueCssVariable('--window-bg-color'), '');

    applyTheme('gruvebox');

    assert.equal(getValueCssVariable('--window-bg-color'), 'rgb(42, 42, 42)');
  });

  it("should rise Error: The theme 'indigo' does not exist. Please choose a valid theme.", () => {
    let themeName = 'indigo';

    assert.equal(getValueCssVariable('--window-bg-color'), '');
    assert.throws(
      () => {
        applyTheme('indigo');
      },
      Error,
      `The theme \'${themeName}\' does not exist. Please choose a valid theme.`
    );
  });

  it('should rise Error message: theme name must be string', () => {
    assert.throws(
      () => {
        applyTheme(123);
      },
      Error,
      'The provided theme name must be a string.'
    );
  });

  afterEach(() => {
    cleanup();
  });
});
