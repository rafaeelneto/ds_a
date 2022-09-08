function capitalizeWords (words) {
  // add whatever parameters you deem necessary - good luck!
  const wordsArrLength = words.length
  if(wordsArrLength === 0){
    return []
  }

  const wordsArray = words.map((el) => el)

  const lastWord = wordsArray.pop();
  const capArray = capitalizeWords(wordsArray);
  capArray[wordsArrLength - 1] = lastWord.toUpperCase()

  return capArray
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words))// ['I', 'AM', 'LEARNING', 'RECURSION']
console.log(words)