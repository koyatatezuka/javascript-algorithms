const anagrams = {};

anagrams.one = (s1, s2) => {
	if (s1.length !== s2.length) return false;
	const o1 = {};
	const o2 = {};

	for (let i = 0; i < s1.length; i++) {
		o1[s1[i]] = (o1[s1[i]] || 0) + 1;
	}

	for (let i = 0; i < s2.length; i++) {
		o2[s2[i]] = (o2[s2[i]] || 0) + 1;
	}

	for (let key in o1) {
		if (o1[key] !== o2[key]) return false;
	}

	return true;
};

module.exports = anagrams;
