function mergeTrial(arr, arr2) {
  const sortedArray = [];
  let array1 = arr;
  let array2 = arr2;
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

function mergeTemplate(arr, arr2) {}

console.log(mergeTrial([1, 10, 50], [2, 14, 99, 100]));
