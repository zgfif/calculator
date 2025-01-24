import assert from 'assert';
import binary_operation from '../app/js/binary_operation.js';

describe('binary_opearation', () => {
  it('should return zero', () => {
    assert.equal(binary_operation([2, 3, 4, 5]), 'Invalid input length');
  });

  it('when not enough arguments', () => {
    assert.equal(binary_operation([2, 3]), 'Invalid input length');
  });

  it('when incorrect opeartion', () => {
    assert.equal(binary_operation([3, 3, 4]), 'Invalid operation sign');
  });

  it('when operation is unknown**', () => {
    assert.equal(binary_operation([3, '**', 4]), 'Invalid operation sign');
  });

  it('when incorrect number1', () => {
    assert.equal(binary_operation(['+', '+', 4]), 'Invalid number input');
  });

  it('when incorrect number2', () => {
    assert.equal(binary_operation([5, '+', '+']), 'Invalid number input');
  });

  it('should return result', () => {
    assert.equal(binary_operation([22, '/', 2]), 11);
  });

  it('should return zero', () => {
    assert.equal(binary_operation(['0', '/', '9']), 0);
  });
});
