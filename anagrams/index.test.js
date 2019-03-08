const { one } = require('./index');

describe('#anagrams', () => {
  test('one should test whether s1 is an anagram of s2', () => {
    const expected = true;
    const result = one('anagram', 'nagaram');

    expect(result).toBe(expected);
  })
})