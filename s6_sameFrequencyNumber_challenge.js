function sameFrequency(num1, num2) {
  const num1Str = String(num1);
  const num2Str = String(num2);

  const frequencyNum1 = {};
  const frequencyNum2 = {};

  for (let num of num1Str) {
    frequencyNum1[num] = (frequencyNum1[num] || 0) + 1;
  }

  for (let num of num2Str) {
    frequencyNum2[num] = (frequencyNum2[num] || 0) + 1;
  }

  for (let numKey in frequencyNum1) {
    // check if the key is presente on the frequencyNum2
    if (!(numKey in frequencyNum2)) {
      return false;
    }

    // check if the key has the same frequency
    if (frequencyNum2[numKey] !== frequencyNum1[numKey]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 123));
