const { flatten } = require('./index');

describe('flatten', () => {
	test('flatten(array) return flaten array', () => {
		const result = flatten([1, [2, [3, 4]]]);
		const expected = [1, 2, 3, 4];

		expect(result).toEqual(expected);
	});
});
