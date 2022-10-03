function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const el = arr[i];
    let j = i - 1;
    while (j > -1 && arr[j] > el) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = el;
  }
  return arr;
}

console.log(insertionSort([12, 24, 21, 1, 6, 23]));
