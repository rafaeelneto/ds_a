function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // determine the pivot point possition
  let pivotPointCounter = 0;
  const pivotValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const el = arr[i];
    if (el < pivotValue) {
      swap(arr, i, pivotPointCounter + 1);
      pivotPointCounter++;
    }
  }

  swap(arr, 0, pivotPointCounter);

  return [
    ...quickSort(arr.slice(0, pivotPointCounter)),
    arr[pivotPointCounter],
    ...quickSort(arr.slice(pivotPointCounter + 1, arr.length)),
  ];
}

console.log(quickSort([3, 1, 7, 10, 4, 6]));
