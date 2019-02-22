const yearTillThreshold = {};

yearTillThreshold.recursiveProfit = (deposit, rate, threshold, year = 0) => {
	if (deposit >= threshold) return year;

	return yearTillThreshold.recursiveProfit(
		deposit + (deposit * rate) / 100,
		rate,
		threshold,
		year + 1
	);
};

module.exports = yearTillThreshold;
