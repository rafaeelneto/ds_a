// `getDigit(12345, 0) // 5`;
function getDigit(number, pos) {
  return Math.floor(10 * (10 ** (Math.log10(number) - (pos + 1)) % 1));
}

// `getDigitCount(212) // 3`;
function getDigitCount(number) {
  if (!number || number < 0) {
    return 0;
  }
  return Math.ceil(Math.log10(number));
}

// `mostDigits([2321, 23, 4341, 23]) //4`;
function mostDigitsAmount(numbers) {
  if (!numbers) {
    return 0;
  }
  let currMostDigit = 0;
  for (let i = 0; i < numbers.length; i++) {
    const digitsAmount = getDigitCount(numbers[i]);
    if (digitsAmount > currMostDigit) {
      currMostDigit = digitsAmount;
    }
  }

  return currMostDigit;
}

// Radix sort (my implementation)
