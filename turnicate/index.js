exports.turnicate = (arr, num) => {
  const ans = [];

  for (let i = 0; i < arr.length; i += num) {
    ans.push(arr.slice(i, i + num))
  }

  return ans;
}