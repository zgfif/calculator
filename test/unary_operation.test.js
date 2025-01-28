import unary_operation from '../app/js/unary_operation.js';
import assert from 'assert';

describe('unary_operation', () => {
  it('should return 0.23 for 23 and %', () => {
    assert.equal(unary_operation(['23', '%']), 0.23);
  });

  it('should return -23 for 23 and +- ', () => {
    assert.equal(unary_operation(['23', '+-']), -23);
  });

  it('should return invalid number', () => {
    assert.equal('invalid number', unary_operation(['+-', '23']));
  });

  it('should return operation is not supported', () => {
    assert.equal('operation is not supported', unary_operation(['23', '+']));
  });

  it('should return also operation is not supported', () => {
    assert.equal('operation is not supported', unary_operation(['23', '23']));
  });

  it('should return invalid input', () => {
    assert.equal('invalid input', unary_operation(['23', '+-', '7']));
  });

  it('should also return invalid input', () => {
    assert.equal('invalid input', unary_operation(['23']));
  });
});
