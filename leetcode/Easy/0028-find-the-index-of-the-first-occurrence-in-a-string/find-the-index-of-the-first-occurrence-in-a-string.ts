function strStr(haystack: string, needle: string): number {
  let i = 0;
  let j = 0;

  while (j < haystack.length) {
    if (i === needle.length) {
      return j;
    }
    while (i < needle.length) {
      if (haystack[j + i] === needle[i]) {
        i++;
      } else {
        i = 0;
        j++;
        break;
      }
    }
  }

  return -1;
}
