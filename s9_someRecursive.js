

function someRecursive(arr, callback){
  // add whatever parameters you deem necessary - good luck!
  if(arr.length === 0){
    return false;
  }

  const fnRes = callback(arr[arr.length-1])
  if (fnRes) {
    return true;
  }

  return someRecursive(arr.slice(0, -1), callback)
}


// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1,2,3,4], isOdd)) // true
// someRecursive([4,6,8,9], isOdd) // true
console.log(someRecursive([4,6,8], isOdd)) // false
// someRecursive([4,6,8], val => val > 10); // false