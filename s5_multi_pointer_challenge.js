// MULTIPLE POINTER SOLUTION
// Count unique value 
function countUnique(arr) {
	if (arr.length === 0) {
		return 0;
	}
	let counter = 0;

	let left = 0;
	let right = left + 1;
	while (left < arr.length) {
		if (arr[left] !== arr[right]){
			left = right;
			counter++;
		}
		right++;
	}
	return counter;
}

console.log(countUnique([-1, 0, 1,2,3,4, 4]))