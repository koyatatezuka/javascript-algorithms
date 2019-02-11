exports.search = (searchName , array) => {

  searchName = new RegExp(searchName, 'i')
  for (let i of array) {
    if (searchName.test(i.name)) {
      return i.name
    }
  }

  return `User does not exist.`
}