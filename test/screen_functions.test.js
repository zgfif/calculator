import { clearScreen, showOnScreen } from '../app/js/screen_functions.js';
import assert from 'assert';
import jsdomGlobal from 'jsdom-global';

let cleanup;

describe('clearScreen', () => {
  before(() => {
    cleanup = jsdomGlobal();
  });

  it('should not change screen', () => {
    document.body.innerHTML = '<div id="input_field">0</div>';
    clearScreen();
    assert.equal(document.querySelector('#input_field').textContent, '0');
  });

  it('should change 155 to zero', () => {
    document.body.innerHTML = '<div id="input_field">155</div>';

    clearScreen();

    assert.equal(document.querySelector('#input_field').textContent, '0');
  });

  it('should change 15 + 9 + 1 to zero', () => {
    document.body.innerHTML = '<div id="input_field">15 + 9 + 1</div>';

    clearScreen();

    assert.equal(document.querySelector('#input_field').textContent, '0');
  });

  describe('showOnScreen', () => {
    it('should show expression on screen', () => {
      document.body.innerHTML = '<div id="input_field">0</div>';

      showOnScreen(['23', '+', '11', '/', '2']);

      assert.equal(document.querySelector('#input_field').textContent, '23 + 11 / 2');
    });

    it('should show Cannot devide by zero on screen', () => {
      document.body.innerHTML = '<div id="input_field">0</div>';

      showOnScreen(['Cannot devide by zero']);

      assert.equal(document.querySelector('#input_field').textContent, 'Cannot devide by zero');
    });
  });

  after(() => {
    cleanup();
  });
});
