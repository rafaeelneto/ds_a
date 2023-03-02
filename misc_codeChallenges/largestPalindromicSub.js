function checkPalindromic(s) {
  if (s.length < 1) {
    return undefined;
  }

  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

function findPalindromeBySize(s, size) {
  const i = size - 1;
  const palindromesFound = [];
  for (let j = 0; j + i <= s.length; j++) {
    const testedSubstring = s.substring(j, j + i + 1);
    if (checkPalindromic(testedSubstring)) {
      palindromesFound.push([j, j + i]);
    }
  }

  return palindromesFound;
}

var longestPalindrome = function (s) {
  if (s.length <= 1) {
    return s;
  }

  let palindromicStrings = findPalindromeBySize(s, 3);

  if (palindromicStrings.length === 0) {
    palindromicStrings = findPalindromeBySize(s, 2);
  }

  for (let i = 1; i < Math.max(4, s.length); i++) {
    for (let j = 0; j + i <= s.length; j++) {
      const testedSubstring = s.substring(j, j + i + 1);
      if (checkPalindromic(testedSubstring)) {
        palindromicStrings.push([j, j + i]);
      }
    }
  }

  let largerPalindromicString = 1;

  for (const el of palindromicStrings) {
    largerPalindromicString = Math.max(largerPalindromicString, el[1] - el[0]);
  }

  palindromicStrings = palindromicStrings.filter(
    (el) => el[1] - el[0] === largerPalindromicString
  );

  let palindromicString = '';

  for (const el of palindromicStrings) {
    let startIndex = el[0];
    let endIndex = el[1] + 1;
    let isPalidromic = false;

    do {
      const testedSubstring = s.slice(startIndex, endIndex);
      isPalidromic = checkPalindromic(testedSubstring);

      if (isPalidromic) {
        palindromicString =
          testedSubstring.length > palindromicString.length
            ? testedSubstring
            : palindromicString;
      }

      startIndex--;
      endIndex++;
    } while (isPalidromic && startIndex >= 0 && endIndex < s.length);
  }

  return palindromicString;
};
console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('FDASFararafdSA'));
console.log(longestPalindrome('arara'));
console.log(longestPalindrome('bb'));
console.log(
  longestPalindrome(
    'kztakrekvefgchersuoiuatzlmwynzjhdqqftjcqmntoyckqfawikkdrnfgbwtdpbkymvwoumurjdzygyzsbmwzpcxcdmmpwzmeibligwiiqbecxwyxigikoewwrczkanwwqukszsbjukzumzladrvjefpegyicsgctdvldetuegxwihdtitqrdmygdrsweahfrepdcudvyvrggbkthztxwicyzazjyeztytwiyybqdsczozvtegodacdokczfmwqfmyuixbeeqluqcqwxpyrkpfcdosttzooykpvdykfxulttvvwnzftndvhsvpgrgdzsvfxdtzztdiswgwxzvbpsjlizlfrlgvlnwbjwbujafjaedivvgnbgwcdbzbdbprqrflfhahsvlcekeyqueyxjfetkxpapbeejoxwxlgepmxzowldsmqllpzeymakcshfzkvyykwljeltutdmrhxcbzizihzinywggzjctzasvefcxmhnusdvlderconvaisaetcdldeveeemhugipfzbhrwidcjpfrumshbdofchpgcsbkvaexfmenpsuodatxjavoszcitjewflejjmsuvyuyrkumednsfkbgvbqxfphfqeqozcnabmtedffvzwbgbzbfydiyaevoqtfmzxaujdydtjftapkpdhnbmrylcibzuqqynvnsihmyxdcrfftkuoymzoxpnashaderlosnkxbhamkkxfhwjsyehkmblhppbyspmcwuoguptliashefdklokjpggfiixozsrlwmeksmzdcvipgkwxwynzsvxnqtchgwwadqybkguscfyrbyxudzrxacoplmcqcsmkraimfwbauvytkxdnglwfuvehpxd'
  )
);
console.log(
  longestPalindrome(
    '"nypdmqqgauepeyfvwcdpbmmaxfwxmmtswfuwldtvqcisywalfnvovuordczxlyzqmslxilpnenbuwbcpebneovitwkkswsijajnkwkfbxnulmwotgrmpklntfyjavccbrgwqynryeoswmhsqzcwnudkuvfkikjxjkjpghsytjfkpvkjpvblamdeegeohospporbtorkbuggbawgodhxpscfksjbirxvjyjapwwushmnqsxktnslvonlwvuseinrmwvfqjgzpkwcqfzfdbbmcngmsoeegudwjvldqmaomwbqvijesnpxiqvtfeiqebrfjhtvjdwkopyfzaslewdjnkmalvfinbuouwcgnfecjtdzwycxrynxepbcsroyzrsgiiuaszvatwyuxinwhni"'
  )
);
