exports.same = (arr1, arr2) => {
	return arr1.reduce((a, c) => a + Math.pow(c, 2), 0) === arr2.reduce((a, c) => a + c, 0);
};
