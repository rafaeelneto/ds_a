// MULTIPLE POINT PATTERN
function sumZero(arr) {
  let left = 0;
  let right = arr.length -1;
  const sumPairs = [];
  while (left < right) {
  	const sum = arr[left] + arr[right];
    if (sum === 0) {
     	sumPairs.push([arr[left], arr[right]])
      right--;
      left++;
    } else if (sum > 0) {
    	right--;
    } else {
    	left++;
    }
  }
  
  if(sumPairs.length  === 0){
   return undefined
  } 
  
  return sumPairs;
}

const validPairs = sumZero([-4, -3, -3 ,-2, -1, 1, 2, 3])

console.log(validPairs)