function avgPair(arr, avg) {
	if (arr.length === 0) {
		return false;
	}

	let i = 0;
	let j = arr.length -1;

	while(i < j) {
		const calcAvg = (arr[i] + arr[j])/2
		if(calcAvg === avg) {
			return true;
		}
		if (calcAvg > avg) {
			j--;
		}

		if (calcAvg < avg){
			i++;
		}
	}

	return false;
}

console.log(avgPair([1,2,3], 2.5));