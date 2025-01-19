import assert from 'assert';
import { binary_operation } from '../app/js/binary_operation.js';

describe('binary_opearation', () => {
  it('should return zero', () => {
    assert.equal(binary_operation([2, 3, 4, 5]), 0);
  });

  it('when not enough arguments', () => {
    assert.equal(binary_operation([2, 3]), 0);
  });

  it('when incorrect opeartion', () => {
    assert.equal(binary_operation([3, 3, 4]), 'invalid operation sign');
  });

  it('should return result', () => {
    assert.equal(binary_operation([22, '/', 2]), 11);
  });
});
