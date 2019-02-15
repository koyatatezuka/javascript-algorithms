const permutations = {};

permutations.genAnagrams = (word, anagram = '', anagrams = []) => {
	if (!word) {
		anagrams.push(anagram);
		return;
	}

	for (let i = 0; i < word.length; i++) {
		anagram += word[i];
		permutations.genAnagrams(word.slice(0, i) + word.slice(i + 1), anagram, anagrams);
		anagram = anagram.slice(0, anagram.length - 1);
	}

	return anagrams;
};

module.exports = permutations;
