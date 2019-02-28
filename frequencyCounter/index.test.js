const { same } = require('./index');

describe('#frequencyCounter', () => {
	test('.same', () => {
		const expected = true;
		const result = same([1, 2, 3], [1, 4, 9]);

		expect(result).toBe(expected);
	});
});
