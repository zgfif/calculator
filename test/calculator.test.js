import Calculator from '../app/js/calculator.js';
import assert from 'assert';
import jsdomGlobal from 'jsdom-global';

describe('Calculator', () => {
  let cleanup;

  before(() => {
    cleanup = jsdomGlobal();
    document.body.innerHTML = '<div id="input_field"></div>';
    console.log('initialization jsdom-global...');
  });

  describe('initial state of calculator', () => {
    it('should have default expression and default currentNumber', () => {
      const calculator = new Calculator();

      assert.deepEqual(calculator.expression, []);
      assert.strictEqual(calculator.currentNumber, '0');
    });
  });

  describe('type of operation is number', () => {
    it('when currentNumber was 0 and expression has number', () => {
      const calculator = new Calculator();

      calculator.currentNumber = '';
      calculator.expression = ['3.4'];

      calculator.handle('number', '9');

      assert.strictEqual(calculator.currentNumber, '9');
      assert.deepEqual(calculator.expression, []);
    });

    it('when currentNumber was 0', () => {
      const calculator = new Calculator();

      calculator.handle('number', '5');

      assert.strictEqual(calculator.currentNumber, '5');
      assert.deepEqual(calculator.expression, []);
    });

    it('when currentNumber was 5', () => {
      const calculator = new Calculator();
      calculator.currentNumber = '5';
      calculator.expression = [];

      calculator.handle('number', '5');

      assert.strictEqual(calculator.currentNumber, '55');
      assert.deepEqual(calculator.expression, []);
    });

    it('when currentNumber was 0.', () => {
      const calculator = new Calculator();
      calculator.currentNumber = '0.';
      calculator.handle('number', '5');

      assert.strictEqual(calculator.currentNumber, '0.5');
      assert.deepEqual(calculator.expression, []);
    });

    it("when the expression's last item is '+'", () => {
      const calculator = new Calculator();
      calculator.currentNumber = '';
      calculator.expression = ['5', '+'];

      calculator.handle('number', '9');

      assert.strictEqual(calculator.currentNumber, '9');
      assert.deepEqual(calculator.expression, ['5', '+']);
    });

    it("when the expression's last item is 66", () => {
      const calculator = new Calculator();
      calculator.currentNumber = '';
      calculator.expression = ['50', '/', '2'];

      calculator.handle('number', '9');

      assert.strictEqual(calculator.currentNumber, '9');
      assert.deepEqual(calculator.expression, ['50', '/']);
    });
  });

  describe('type of operation is AC', () => {
    it('should reset calculator when ac operation', () => {
      const calculator = new Calculator();
      calculator.expression = ['5', '+', '5'];
      calculator.currentNumber = '10';

      calculator.handle('ac', 'ac');

      assert.strictEqual(calculator.currentNumber, '0');
      assert.deepEqual(calculator.expression, []);
    });
  });

  describe('type of operation is point', () => {
    it('should add point to currentNumber', () => {
      const calculator = new Calculator();
      calculator.currentNumber = '5';
      calculator.expression = [];

      calculator.handle('point', '.');

      assert.strictEqual(calculator.currentNumber, '5.');
      assert.deepEqual(calculator.expression, []);
    });

    it('should NOT add second point to currentNumber', () => {
      const calculator = new Calculator();
      calculator.currentNumber = '5.';
      calculator.expression = [];

      calculator.handle('point', '.');

      assert.strictEqual(calculator.currentNumber, '5.');
      assert.deepEqual(calculator.expression, []);
    });

    it('should not change the currentNumber', () => {
      const calculator = new Calculator();
      calculator.currentNumber = '5.66';
      calculator.expression = [];

      calculator.handle('point', '.');

      assert.strictEqual(calculator.currentNumber, '5.66');
      assert.deepEqual(calculator.expression, []);
    });
  });

  describe("type of operation is '='", () => {
    it('should calculate the expression', () => {
      const calculator = new Calculator();
      calculator.currentNumber = '5';
      calculator.expression = ['7', '+'];

      calculator.handle('=', '=');

      assert.strictEqual(calculator.currentNumber, '');
      assert.deepEqual(calculator.expression, ['12']);
    });
  });

  describe("the type of operation is  '+-'", () => {
    it('should change the sign of the currentNumber', () => {
      const calculator = new Calculator();
      calculator.currentNumber = '5';
      calculator.expression = [];

      calculator.handle('+-', '+-');

      assert.strictEqual(calculator.currentNumber, '-5');
      assert.deepEqual(calculator.expression, []);
    });

    it('should also change the sign of the currentNumber', () => {
      const calculator = new Calculator();
      calculator.currentNumber = '-8';
      calculator.expression = [];

      calculator.handle('+-', '+-');

      assert.strictEqual(calculator.currentNumber, '8');
      assert.deepEqual(calculator.expression, []);
    });

    it('should also change the last number in expression', () => {
      const calculator = new Calculator();
      calculator.currentNumber = '';
      calculator.expression = ['23', '*', '-3'];

      calculator.handle('+-', '+-');

      assert.strictEqual(calculator.currentNumber, '');
      assert.deepEqual(calculator.expression, ['23', '*', '3']);
    });

    it('should nothing do', () => {
      const calculator = new Calculator();
      calculator.currentNumber = '';
      calculator.expression = ['23', '*'];

      calculator.handle('+-', '+-');

      assert.strictEqual(calculator.currentNumber, '');
      assert.deepEqual(calculator.expression, ['23', '*']);
    });

    it('should nothing change the currentNumber to -12', () => {
      const calculator = new Calculator();
      calculator.currentNumber = '12';
      calculator.expression = ['23', '*'];

      calculator.handle('+-', '+-');

      assert.strictEqual(calculator.currentNumber, '-12');
      assert.deepEqual(calculator.expression, ['23', '*']);
    });

    it('should change the currentNumber to 12', () => {
      const calculator = new Calculator();
      calculator.currentNumber = '-12';
      calculator.expression = ['23', '*'];

      calculator.handle('+-', '+-');

      assert.strictEqual(calculator.currentNumber, '12');
      assert.deepEqual(calculator.expression, ['23', '*']);
    });

    it('should nothing change when currentNumber is 0.', () => {
      const calculator = new Calculator();
      calculator.currentNumber = '0.';
      calculator.expression = ['23', '*'];

      calculator.handle('+-', '+-');

      assert.strictEqual(calculator.currentNumber, '0.');
      assert.deepEqual(calculator.expression, ['23', '*']);
    });
  });

  describe("the type of operation is  '%'", () => {
    it('should convert to persentage the currentNumber', () => {
      const calculator = new Calculator();
      calculator.currentNumber = '5';
      calculator.expression = [];

      calculator.handle('%', '%');

      assert.strictEqual(calculator.currentNumber, '0.05');
      assert.deepEqual(calculator.expression, []);
    });

    it('should also convert to persentage the last number in expression', () => {
      const calculator = new Calculator();
      calculator.currentNumber = '';
      calculator.expression = ['23', '*', '35'];

      calculator.handle('%', '%');

      assert.strictEqual(calculator.currentNumber, '');
      assert.deepEqual(calculator.expression, ['23', '*', '0.35']);
    });

    it('should nothing do', () => {
      const calculator = new Calculator();
      calculator.currentNumber = '';
      calculator.expression = ['23', '*'];

      calculator.handle('%', '%');

      assert.strictEqual(calculator.currentNumber, '');
      assert.deepEqual(calculator.expression, ['23', '*']);
    });

    it('should convert to persentage the currentNumber 12', () => {
      const calculator = new Calculator();
      calculator.currentNumber = '12';
      calculator.expression = ['23', '*'];

      calculator.handle('%', '%');

      assert.strictEqual(calculator.currentNumber, '0.12');
      assert.deepEqual(calculator.expression, ['23', '*']);
    });

    it('should nothing convert when currentNumber is 0.', () => {
      const calculator = new Calculator();
      calculator.currentNumber = '0.';
      calculator.expression = ['23', '*'];

      calculator.handle('%', '%');

      assert.strictEqual(calculator.currentNumber, '0.');
      assert.deepEqual(calculator.expression, ['23', '*']);
    });
  });

  after(() => {
    cleanup();
    console.log('Очистка выполнена!');
  });
});
