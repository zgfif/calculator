// Description: Test cases for css_variables.js
import { setValueCssVariable, getValueCssVariable } from '../app/js/css_variables.js';
import assert from 'assert';
import jsdomGlobal from 'jsdom-global';
// import 'jsdom-global/register.js';

jsdomGlobal();

describe('setValueCssVariable', () => {
  it('should set 13px', () => {
    let name = '--padding-left';
    let value = '13px';

    assert.equal(getValueCssVariable(name), '');

    setValueCssVariable(name, value);

    assert.equal(getValueCssVariable(name), '13px');
  });
});

describe('getValueCssVariable', () => {
  it('should return empty string', () => {
    let actual = getValueCssVariable('--random-name');
    assert.equal(actual, '');
  });

  it('should return 44em', () => {
    setValueCssVariable('--random-var', '1px solid black');
    let actual = getValueCssVariable('--random-var');
    assert.equal(actual, '1px solid black');
  });
});
