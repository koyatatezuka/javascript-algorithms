// random obj container
const random = {};

random.findEmailDomain = email => email.match(/@\w.*/)[0].replace('@', '');

// Math.pow in recursion
random.pow = (base, exponent) => {
	if (exponent == 0) return 1;
	if (exponent == 1) return base;

	return base * random.pow(base, exponent - 1);
};

module.exports = random;
