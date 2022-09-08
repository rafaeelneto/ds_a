// frequency counter strategy (array can be unsorted, but code is more verbose)
function hasDuplicateFC (...args){

}

// multi pointer (array must be sorted, code not too verbose)
function hasDuplicateMP(...args) {
	if (args.length === 0) {
		return undefined;
	}

	let argsFrequencies = {};

	for (let arg of args) {
		argsFrequencies[arg] = (argsFrequencies[arg] || 0) + 1;
	}

	for (let argKey in argsFrequencies) {
		if (argsFrequencies[argKey] > 1) {
			return true;
		}
	}

	return false;
}

console.log(hasDuplicateMP(182, 812, 1, 1, 832, 324,312));