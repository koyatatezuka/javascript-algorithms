exports.isThisTheEnd = (str, target) => {
  target = new RegExp(target + '$', 'i');

  return target.test(str)
}