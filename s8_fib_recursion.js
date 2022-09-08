function fib(n, i1 = 0, i2 = 1){
  // add whatever parameters you deem necessary - good luck!

  if (n <= 1) {
      return i2;
  }

  const nFibNumber = i1 + i2;

  return fib(n-1, i2, nFibNumber);
}



console.log(fib(4))