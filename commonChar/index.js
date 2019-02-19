exports.commonChar = (s1, s2) => {
	let count = 0;

	s1.split('').forEach(el => {
		if (s2.includes(el)) {
			count++;
			s2 = s2.replace(el, '');
		}
	});

	return count;
};
