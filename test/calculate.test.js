import calculate from '../app/js/calculate.js';
import assert from 'assert';

describe('calculate', () => {
  it('should return 0 when empty array', () => {
    assert.equal(calculate([]), 0);
  });

  it('should return item when length is 1', () => {
    assert.equal(calculate(['*']), '0');
  });

  it('should return 6', () => {
    let expression = ['12', '*', '3', '/', '9', '+', '2'];
    assert.equal(calculate(expression), 6);
  });

  it('should return 87', () => {
    let expression = ['22', '+', '1', '*', '4', '-', '5'];
    assert.equal(calculate(expression), 87);
  });

  it('should return 20.1', () => {
    let expression = ['+-', '3', '*', '33.5', '/', '5'];
    assert.equal(calculate(expression), 20.1);
  });

  it('should also return 20.1', () => {
    let expression = ['-', '+', '+-', '3', '*', '33.5', '/', '5'];
    assert.equal(calculate(expression), 20.1);
  });

  it('should return 0.001', () => {
    let expression = ['5', '+', '5', '+', '5', '+', '5', '+', '5', '/', '444', '/', '55', '*', '1'];
    assert.equal(calculate(expression).toFixed(3), 0.001);
  });

  it('should return cannot devide by zero', () => {
    let expression = ['0', '+', '0', '-', '9', '/', '0'];
    assert.equal(calculate(expression), 'Cannot divide by zero');
  });

  it('should return -13.333', () => {
    let expression = ['*', '55.2', '-', '1', '*', '4', '/', '0.3'];
    assert.equal(calculate(expression).toFixed(3), 722.667);
  });

  it('should alson return cannot devide by zero', () => {
    let expression = ['111', '/', '0'];
    assert.equal(calculate(expression), 'Cannot divide by zero');
  });

  it('should return 4', () => {
    let expression = ['+-', '+-', '+-', '4'];
    assert.equal(calculate(expression), 4);
  });

  it('should return 24.5', () => {
    let expression = ['55', '/', '/', '2', '-', '3'];
    assert.equal(calculate(expression), 24.5);
  });

  it('should return 18', () => {
    let expression = ['99', '-', '-', '*', '4', '/', '22'];
    assert.equal(calculate(expression), 18);
  });

  it('should return -7', () => {
    let expression = ['7', '+-'];
    assert.equal(calculate(expression), -7);
  });

  it('should return 7', () => {
    let expression = ['+-', '7'];
    assert.equal(calculate(expression), 7);
  });
});
