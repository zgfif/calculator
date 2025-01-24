import assert from 'assert';
import { division, multiply, subtract, sum, percent, changeSign } from '../app/js/arithmetic_functions.js';

describe('arithmetic_functions', () => {
  describe('division', () => {
    it('should return zero', () => {
      assert.equal(division(0, 2), 0);
    });

    it('should return message', () => {
      assert.equal(division(20, 0), 'Cannot divide by zero');
    });

    it('should return correct result', () => {
      assert.equal(division(5, 2), 2.5);
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
      assert.equal(subtract(2, 2), 0);
    });

    it('should return float', () => {
      assert.equal(subtract(2, 1.2), 0.8);
    });

    it('should return integer', () => {
      assert.equal(subtract(5, 2), 3);
    });
    it('should return negative number', () => {
      assert.equal(subtract(2, 5), -3);
    });
  });

  describe('sum', () => {
    it('should return zero', () => {
      assert.equal(sum(2, -2), 0);
    });

    it('should return float', () => {
      assert.equal(sum(2, 1.2), 3.2);
    });

    it('should return integer', () => {
      assert.equal(sum(5, 2), 7);
    });
    it('should return negative number', () => {
      assert.equal(sum(2, -5), -3);
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
