import removeDoubleSigns from '../app/js/remove_double_signs.js';
import assert from 'assert';

describe('remove double signs', () => {
  it('should return new array', () => {
    const arr = ['55', '/', '/', '2', '-', '3'];

    let actual = removeDoubleSigns(arr);
    let expected = ['55', '/', '2', '-', '3'];

    assert.deepEqual(actual, expected, 'actual must be equal to expected');
  });

  it('should return empty array', () => {
    const arr = ['*', '/', '/', '+', '-', '+'];
    let actual = removeDoubleSigns(arr);

    assert.deepEqual(actual, [], 'should retunn empty array');
  });

  it('should return empty array', () => {
    const arr = ['*', '4', '/', '+', '3', '+'];
    let actual = removeDoubleSigns(arr);
    let expected = ['4', '+', '3'];

    assert.deepEqual(actual, expected, 'actual must be equal to expected');
  });

  it('should return one number in array', () => {
    const arr = ['*', '/', '/', '+', '4', '+'];
    let actual = removeDoubleSigns(arr);
    let expected = ['4'];

    assert.deepEqual(actual, expected, 'invalid result');
  });

  // ['55', '/', '/', '2', '-', '3']
  it('should return one number in array', () => {
    const arr = ['55', '/', '/', '2', '-', '3'];
    let actual = removeDoubleSigns(arr);
    let expected = ['55', '/', '2', '-', '3'];

    assert.deepEqual(actual, expected, 'invalid result');
  });
});
