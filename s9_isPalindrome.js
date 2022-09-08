function isPalindrome(word){
  // add whatever parameters you deem necessary - good luck!
  if (word.length === 1) {
    return true;
  }

  return word[0] === word[word.length - 1];
}

console.log(isPalindrome('awesome')) // false
isPalindrome('foobar') // false
console.log(isPalindrome('tacocat')) // true
isPalindrome('amanaplanacanalpanama') // true
isPalindrome('amanaplanacanalpandemonium') // false1