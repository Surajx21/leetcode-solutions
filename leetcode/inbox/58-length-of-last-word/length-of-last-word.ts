function lengthOfLastWord(s: string): number {
  let length = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
        if (length > 0) {
            return length
        }
    } else {
        length++
    }

  }
  return length
}