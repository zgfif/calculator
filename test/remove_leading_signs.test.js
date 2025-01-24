import removeLeadingSigns from '../app/js/remove_leading_signs.js';
import assert from 'assert';

describe('remove leading signs', () => {
  it('should return 33', () => {
    let actual = removeLeadingSigns(['*', '+-', '/', '*', '33']);
    let expected = ['33'];

    assert.deepEqual(actual, expected);
  });

  it('should return [13, *, 13]', () => {
    let actual = removeLeadingSigns(['*', '+-', '13', '*', '33']);
    let expected = ['13', '*', '33'];

    assert.deepEqual(actual, expected);
  });

  it('should not change', () => {
    let actual = removeLeadingSigns(['10', '*', '3']);
    let expected = ['10', '*', '3'];
    assert.deepEqual(actual, expected);
  });

  it('should return empty array', () => {
    let actual = removeLeadingSigns(['-', '*', '/']);

    assert.deepEqual(actual, []);
  });
});
