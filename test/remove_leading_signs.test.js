import removeLeadingSigns from '../app/js/remove_leading_signs.js';
import assert from 'assert';

describe('remove leading signs', () => {
  it('should return 33', () => {
    let actual = removeLeadingSigns(['*', '+-', '/', '*', '33']);
    let expected = ['33'];
    assert.equal(actual[actual.length - 1], expected[0]);
    assert.equal(actual.length, 1);
  });

  it('should return 13', () => {
    let actual = removeLeadingSigns(['*', '+-', '13', '*', '33']);
    let expected = '13';
    assert.equal(actual[0], expected);
    assert.equal(actual.length, 3);
  });

  it('should not change', () => {
    let actual = removeLeadingSigns(['10', '*', '3']);
    assert.equal(actual[0], '10');
    assert.equal(actual[1], '*');
    assert.equal(actual[2], '3');
    assert.equal(actual.length, 3);
  });

  it('should return empty array', () => {
    let actual = removeLeadingSigns(['-', '*', '/']);

    assert.equal(actual.length, 0);
  });
});
