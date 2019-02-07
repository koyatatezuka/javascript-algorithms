const {turnicate} = require('./index');

test('turnicate(arr,num) returns arr split into arrays in the length of num', () => {
  const result = turnicate([1,2,3,4,5,6], 2);
  const expected = [[1,2],[3,4],[5,6]]

  expect(result).toEqual(expected)
})