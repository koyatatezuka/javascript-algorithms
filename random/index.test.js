const { findEmailDomain, pow } = require('./index');

describe('Random tests for functions', () => {
	// email
	test('.findEmailDomain', () => {
		const result = findEmailDomain('"very.unusual.@.unusual.com"@usual.com');
		const expected = 'usual.com';

		expect(result).toBe(expected);
	});

	test('.pow', () => {
		const result = pow(2,4);
		const expected = 16;

		expect(result).toBe(expected)
	})
});
