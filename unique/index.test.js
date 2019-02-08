const { uniqueFilter } = require('./index');

describe('Unique', () => {
	test('uniqueFilter(array) return arrays without duplicates', () => {
		const result = uniqueFilter([1, 2, 3, 1, 2, 3, 1, 2, 3]);
    const expected = [1, 2, 3];
    
    expect(result).toEqual(expected)
	});
});
