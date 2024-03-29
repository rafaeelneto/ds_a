var maxSubArray = function (nums) {
  let maxSum = nums[0];

  let currSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (currSum < 0) {
      currSum = 0;
    }
    currSum += nums[i];
    maxSum = Math.max(currSum, maxSum);
  }

  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([-2, -1, -3])); // 0
console.log(maxSubArray([-1, 1, 2, 1])); // 4
console.log(maxSubArray([3, -2, -3, -3, 1, 3, 0])); // 0

// var maxSubArray = function (nums) {
//   let maxNumber = nums[0];
//   let maxIndex = 0;

//   for (let i = 0; i < nums.length; i++) {
//     const el = nums[i];
//     if (el >= maxNumber) {
//       maxNumber = el;
//       maxIndex = i;
//     }
//   }

//   let maxLeft = maxNumber;
//   let currSumLeft = maxNumber;
//   let maxLeftIndex = maxIndex;
//   for (let i = maxIndex - 1; i >= 0; i--) {
//     const element = nums[i];
//     currSumLeft = currSumLeft + element;

//     if (currSumLeft > maxLeft) {
//       maxLeftIndex = i;
//       console.log({ i });
//     }
//     console.log(`el ${element}; sum ${currSumLeft}; max ${maxLeft}`);
//     maxLeft = Math.max(currSumLeft, maxLeft);
//   }

//   let maxRight = maxNumber;
//   let currSumRight = maxNumber;
//   let maxRightIndex = maxIndex;
//   for (let i = maxIndex + 1; i < nums.length; i++) {
//     const element = nums[i];
//     currSumRight = currSumRight + element;
//     if (currSumRight > maxRight) {
//       console.log({ i });
//       maxRightIndex = i;
//     }
//     console.log(`el ${element}; sum ${currSumLeft}; max ${maxLeft}`);
//     maxRight = Math.max(currSumRight, maxRight);
//   }

//   console.log(maxLeftIndex, maxRightIndex);

//   let maxSum = 0;
//   for (let i = maxLeftIndex; i <= maxRightIndex; i++) {
//     console.log(nums[i]);
//     maxSum += nums[i];
//   }

//   return maxSum;
// };
