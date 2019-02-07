const { recur, dyna } = require('./index');

describe('Fib Algorithms', () => {
  test('recur(num) returns fib sequence at num index', () => {
    const result = recur(10)
    const expected = 55
  
    expect(result).toEqual(expected)
  })
  
  test('dyna(num) returns fib sequence at num index', () => {
    const result = dyna(10)
    const expected = 55
  
    expect(result).toEqual(expected)
  })
})

