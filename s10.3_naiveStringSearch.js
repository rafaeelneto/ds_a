// SEARCH A SUBSTRING
// COUNT THE AMOUNT OF TIMES THAT A SUBSTRING APPEARS ON A BIGGER STRING
function naiveSearch(larger, shorter) {
  let count = 0;
  for (let i = 0; i < larger.length; i++) {
    if (larger[i] === shorter[0]) {
      for (let j = 1; j < shorter.length; j++) {
        if (larger[i + j] !== shorter[j]) break;
        if (j === shorter.length - 1) count++;
      }
    }
  }
  return count;
}
console.log(naiveSearch('lorie loled', 'lol'));
