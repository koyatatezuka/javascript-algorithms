exports.uniqueFilter = (array) => {
  return array.filter((el, i, arr) => arr.indexOf(el) === i)
}