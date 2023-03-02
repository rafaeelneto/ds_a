var maxSubArray = function (nums) {
  let wholeSum = 0;

  // -2, 1, -3, 4, -1, 2, 1, -5, 4
  for (let i = 0; i < nums.length; i++) {
    wholeSum += nums[i];
  }

  let i = 0;
  let j = nums.length - 1;
  let sumLeft = 0;
  let sumRight = 0;
  let maxSum = wholeSum;
  let currArraySum = wholeSum;
  while (i < j) {
    console.log([nums[i], nums[j]]);
    const currSumLeft = nums[i];
    const currSumRight = nums[j];

    const testedMaximumWithoutLeft = currArraySum - nums[i];
    const testedMaximumWithoutRight = currArraySum - nums[j];
    const testedMaximumWithoutBoth = currArraySum - nums[i] - nums[j];

    console.log({
      testedMaximumWithoutLeft,
      testedMaximumWithoutRight,
      testedMaximumWithoutBoth,
      maxSum,
    });

    maxSum = Math.max(
      testedMaximumWithoutLeft,
      testedMaximumWithoutRight,
      testedMaximumWithoutBoth,
      maxSum
    );

    console.log(maxSum);

    if (testedMaximumWithoutLeft >= maxSum) {
      i++;
      sumLeft = currSumLeft;
      currArraySum -= currSumLeft;
    } else if (testedMaximumWithoutRight >= maxSum) {
      j--;
      sumRight = currSumRight;
      currArraySum -= currSumRight;
    } else if (testedMaximumWithoutBoth >= maxSum) {
      i++;
      j--;
      currArraySum -= currSumLeft;
      currArraySum -= currSumRight;
      sumLeft = currSumLeft;
      sumRight = currSumRight;
    } else {
      currArraySum -= currSumLeft;
      currArraySum -= currSumRight;
      sumLeft = currSumLeft;
      sumRight = currSumRight;
      i++;
      j--;
    }
  }

  return maxSum;
};

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-2, -1, -3, 4, -1, 2, 1, -5, -4]));
