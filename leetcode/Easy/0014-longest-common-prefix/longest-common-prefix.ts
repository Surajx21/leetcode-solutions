function longestCommonPrefix(strs: string[]): string {
  let prefix = "";
  let position = 0;

  while (position < strs[0].length) {
    for (let index = 0; index < strs.length - 1; index++) {
      let currentWord = strs[index];
      let secondWord = strs[index + 1];

      if (currentWord[position] != secondWord[position]) {
        return prefix;
      }
    }

    prefix += strs[0][position];
    position++;
  }

  return prefix;
}