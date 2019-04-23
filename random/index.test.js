const { findEmailDomain } = require('./index');

describe('Random tests for functions', () => {
	// email
	test('.findEmailDomain', () => {
		const result = findEmailDomain('"very.unusual.@.unusual.com"@usual.com');
		const expected = 'usual.com';

		expect(result).toBe(expected);
	});
});
