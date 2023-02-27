var productExceptSelf = function (nums) {
  const answer = [];
  const slicedArrays = [];

  for (let i = 0; i < nums.length; i++) {
    const numsCopy = [...nums];
    numsCopy[i] = 1;
    slicedArrays.push(numsCopy);
  }

  // console.log(slicedArrays);

  for (let i = 0; i < nums.length; i++) {
    const slicedArray = slicedArrays[i];

    let arrayProduct = 1;

    for (let j = 0; j < slicedArray.length; j++) {
      arrayProduct *= slicedArray[j];
    }

    answer.push(arrayProduct);
  }

  return answer;
};

console.log(productExceptSelf([1, 2, 3, 4]));

// console.log([1, 2, 3, 4].slice(2, 5));
