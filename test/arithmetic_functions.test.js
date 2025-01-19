import assert from 'assert';
import { devision, multiply, subt, summ, percent, changeSign } from '../app/js/arithmetic_functions.js';

describe('arithmetic_functions', () => {
  describe('devision', () => {
    it('should return zero', () => {
      assert.equal(devision(0, 2), 0);
    });

    it('should return message', () => {
      assert.equal(devision(20, 0), 'Cannot divide by zero');
    });

    it('should return correct result', () => {
      assert.equal(devision(5, 2), 2.5);
    });
  });

  describe('multiply', () => {
    it('should return zero', () => {
      assert.equal(multiply(0, 2), 0);
    });

    it('should return float', () => {
      assert.equal(multiply(2, 1.2), 2.4);
    });

    it('should return integer', () => {
      assert.equal(multiply(5, 2), 10);
    });
  });

  describe('subtraction', () => {
    it('should return zero', () => {
      assert.equal(subt(2, 2), 0);
    });

    it('should return float', () => {
      assert.equal(subt(2, 1.2), 0.8);
    });

    it('should return integer', () => {
      assert.equal(subt(5, 2), 3);
    });
    it('should return negative number', () => {
      assert.equal(subt(2, 5), -3);
    });
  });

  describe('sum', () => {
    it('should return zero', () => {
      assert.equal(summ(2, -2), 0);
    });

    it('should return float', () => {
      assert.equal(summ(2, 1.2), 3.2);
    });

    it('should return integer', () => {
      assert.equal(summ(5, 2), 7);
    });
    it('should return negative number', () => {
      assert.equal(summ(2, -5), -3);
    });
  });

  describe('percent', () => {
    it('should return correct result', () => {
      assert.equal(percent(45), 0.45);
    });
  });

  describe('changeSign', () => {
    it('should return negative', () => {
      assert.equal(changeSign(45), -45);
    });

    it('should return positive', () => {
      assert.equal(changeSign(-45), 45);
    });
  });
});
