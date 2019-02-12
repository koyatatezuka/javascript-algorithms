const { isThisTheEnd } = require('./index');

test('isThisTheEnd(str, target) returns boolean if str ends with target', () => {
	const result = isThisTheEnd('The magic is gone', 'gone');
	const expected = true;

	expect(result).toBe(expected);
});
