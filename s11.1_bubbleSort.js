function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
// function sortBubble(arr) {
//   let last = arr.length;
//   while (last > 0) {
//     for (let i = 0; i < last - 1; i++) {
//       if (i < last - 1 && arr[i] > arr[i + 1]) {
//         swap(arr, i, i + 1);
//       }
//     }
//     last--;
//   }

//   return arr;
// }

// optimization to nearly sorted arrays
function sortBubble(arr) {
  let last = arr.length;
  while (last > 0) {
    let wasSwap = false;
    for (let i = 0; i < last - 1; i++) {
      if (i < last - 1 && arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        wasSwap = true;
      }
    }
    if (!wasSwap) {
      console.log('NO SWAP BEFORE');
      return arr;
    }
    console.log(arr.length + 1 - last + '° LOOP COMPLETED');
    last--;
  }
  return arr;
}

console.log(sortBubble([27, 25, 564, 2, 5, 12]));
console.log(sortBubble([8, 1, 2, 3, 4, 5, 6]));
