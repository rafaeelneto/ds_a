function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function selectionSort(arr) {
  for (let s = 0; s < arr.length; s++) {
    let minimunIndex = s;
    for (let i = s + 1; i < arr.length; i++) {
      if (arr[minimunIndex] > arr[i]) {
        minimunIndex = i;
      }
    }
    console.log(`${s + 1}° completed`);
    if (s !== minimunIndex) {
      swap(arr, s, minimunIndex);
    }
  }
  return arr;
}

console.log(selectionSort([12, 24, 21, 1, 6, 23]));
