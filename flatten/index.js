exports.flatten = (array) => {

  while(array.some(el => Array.isArray(el))) {
     array = array.reduce((arr, cur) => arr.concat(cur), [])
  }

  return array
}