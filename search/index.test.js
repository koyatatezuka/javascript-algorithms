const { search } = require('./index');

describe('search', () => {
	test('search(searchName, array) returns user from array of obj', () => {
		const arr = [{ name: 'koyata tezuka', age: 23 }, { name: 'Mike Lite', age: 21 }];
		const result = search('Koyata', arr);
		const expected = 'koyata tezuka';

		expect(result).toBe(expected);
	});
});
