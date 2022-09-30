function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const el = arr[i];
    for (let j = i - 1; j > -1; j--) {
      console.log(el, arr[j]);
      if (el < arr[j] && (j === 0 || el > arr[j - 1])) {
        swap(arr, i, j);
        break;
      }
    }
    console.log(arr);
  }
  return arr;
}

console.log(insertionSort([12, 24, 21, 1, 6, 23]));
