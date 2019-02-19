/* returns the count of common string in s1 found in s2 */
const { commonChar } = require('./index');

describe('#Patterns', () => {
	test('commonChar(s1, s2)', () => {
		const expected = 3;
		const result = commonChar('aabcc', 'adcaa');

		expect(result).toBe(expected);
	});
});
