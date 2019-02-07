
const fib = {};

fib.recur = (num) => {
  if (num < 2) return num;

  return fib.recur(num - 1) + fib.recur(num - 2)
}

fib.dyna = (num) => {
  const fib = [1,1];

  for (let i = 1; i < num - 1; i++) {
    fib.push(fib[i - 1] + fib[i])
  }

  return fib[fib.length - 1]
}

module.exports = fib