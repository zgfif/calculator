import removeDoubleSigns from '../app/js/remove_double_signs.js';
import assert from 'assert';

describe('remove double signs', () => {
  it('should return new array', () => {
    const arr = ['55', '/', '/', '2', '-', '3'];
    let result = removeDoubleSigns(arr);
    assert.equal(result.length, 5, 'length of array');
    assert.equal(result[2], 2);
  });

  it('should return empty array', () => {
    const arr = ['*', '/', '/', '+', '-', '+'];
    let result = removeDoubleSigns(arr);
    assert.equal(result.length, 0, 'length of array');
  });

  it('should return empty array', () => {
    const arr = ['*', '4', '/', '+', '3', '+'];
    let result = removeDoubleSigns(arr);
    assert.equal(result.length, 3, 'length of array');
    assert.equal(result.toString(), '4,+,3');
  });

  it('should return one number in array', () => {
    const arr = ['*', '/', '/', '+', '4', '+'];
    let result = removeDoubleSigns(arr);
    assert.equal(result.length, 1, 'length of array');
    assert.equal(result[0], '4', 'element in array');
  });

  // ['55', '/', '/', '2', '-', '3']
  it('should return one number in array', () => {
    const arr = ['55', '/', '/', '2', '-', '3'];
    let result = removeDoubleSigns(arr);
    assert.equal(result.length, 5, 'length of array');
    assert.equal(result.toString(), '55,/,2,-,3', 'element in array');
  });
});
