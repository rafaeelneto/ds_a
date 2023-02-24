/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

function mergeSortedArrays(arr, arr2) {
  const mergedArray = [];

  let i = 0;
  let j = 0;

  while (i < arr.length && j < arr2.length) {
    const arrValue = arr[i];
    const arr2Value = arr2[j];

    if (arrValue < arr2Value) {
      mergedArray.push(arrValue);
      i++;
    } else {
      mergedArray.push(arr2Value);
      j++;
    }
  }

  if (i < arr.length) {
    mergedArray.push(...arr.slice(i, arr.length));
  }
  if (j < arr2.length) {
    mergedArray.push(...arr2.slice(j, arr2.length));
  }

  return mergedArray;
}

var findMedianSortedArrays = function (nums1, nums2) {
  let median = 0;

  const sortedMergedArray = mergeSortedArrays(nums1, nums2);

  if (sortedMergedArray.length === 1) return sortedMergedArray[0];

  let medianIndex = sortedMergedArray.length / 2 - 1;

  if (sortedMergedArray.length % 2 === 0) {
    median =
      (sortedMergedArray[medianIndex] + sortedMergedArray[medianIndex + 1]) / 2;
  } else {
    median = sortedMergedArray[Math.ceil(medianIndex)];
  }

  return median;
};

console.log(findMedianSortedArrays([], [1]));
console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 3], [2, 4]));
console.log(findMedianSortedArrays([1, 3], [2, 4, 5]));
