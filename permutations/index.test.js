const { genAnagrams } = require('./index');

describe('Permutations', () => {
	it('genAnagrams', () => {
		const result = genAnagrams('ABC');
		const expected = ['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA'];

		expect(result).toEqual(expected);
	});
});
