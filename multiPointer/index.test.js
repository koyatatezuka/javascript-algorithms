const { zeroSum, maxSubarraySum } = require('./index');

describe('multiple points data', () => {
	test('zeroSum', () => {
		const expected = [-3, 3];
		const res = zeroSum([-3, -1, 0, 2, 3]);

		expect(res).toEqual(expected);
	});

	test('maxSubarraySum', () => {
		const expected = 17;
		const res = maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4);

		expect(res).toBe(expected);
	});
});
