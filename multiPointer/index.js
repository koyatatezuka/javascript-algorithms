// return two points in an sorted array that equals zero when added up
exports.zeroSum = arr => {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		let sum = arr[left] + arr[right];

		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum < 0) {
			left++;
		} else {
			right--;
		}
	}
};

// return max sum of nth consecutive numbers in an array
exports.maxSubarraySum = (a, n) => {
	let tempSum = 0;
	let maxSum = 0;
	if (a.length < n) return null;

	for (let i = 0; i < n; i++) {
		maxSum += a[i];
	}

	tempSum = maxSum;

	for (let i = n; i < a.length; i++) {
		tempSum = tempSum - a[i - n] + a[i];
		maxSum = Math.max(tempSum, maxSum);
	}

	return maxSum;
};
