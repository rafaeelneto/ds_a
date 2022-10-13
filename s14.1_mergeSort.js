function mergeTrial(arr, arr2) {
  const sortedArray = [];
  let array1 = [...arr];
  let array2 = [...arr2];
  while (array1.length > 0 && array2.length > 0) {
    if (array1[0] >= array2[0]) {
      sortedArray.push(array2[0]);
      array2 = array2.slice(1);
    } else {
      sortedArray.push(array1[0]);
      array1 = array1.slice(1);
    }
  }

  const leftoverArray = array1.length > array2.length ? array1 : array2;
  sortedArray.push(...leftoverArray);

  return sortedArray;
}

function mergePseudoCode(arr, arr2) {
  const sortedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr.length && j < arr2.length) {
    if (arr[i] < arr2[j]) {
      sortedArray.push(arr[i]);
      i++;
    } else {
      sortedArray.push(arr2[j]);
      j++;
    }
  }

  if (i < arr.length) {
    sortedArray.push(...arr.slice(i));
  } else if (j < arr2.length) {
    sortedArray.push(...arr2.slice(j));
  }

  return sortedArray;
}

function mergeSort(unsortedArray) {
  // check if unsortedArray is smaller or equal to one
  const uArrayLength = unsortedArray.length;
  if (uArrayLength <= 1) {
    return unsortedArray;
  }

  const arrayHalfEl = Math.floor(uArrayLength / 2);

  const firstHalf = unsortedArray.slice(0, arrayHalfEl);
  const lastHalf = unsortedArray.slice(arrayHalfEl, uArrayLength);

  return mergePseudoCode(mergeSort(firstHalf), mergeSort(lastHalf));
}

// console.log(mergeTrial([1, 10, 50], [2, 14, 99, 100]));
// console.log(mergePseudoCode([4], [6]));

console.log(mergeSort([3, 1, 7, 10, 4, 6]));
console.log(mergeSort([6, 2, 12, 5, 1, 87, 3, 54, 23, 5, 32, 34]));
