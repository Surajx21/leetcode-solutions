function romanToInt(s: string): number {
  const romanSet = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let end = s.length - 1;
  let value = 0;

  while (end >= 0) {
    const currentRomanNum = s[end];
    const nextRomanNum = s[end - 1];

    if (romanSet[nextRomanNum] < romanSet[currentRomanNum]) {
      value += romanSet[currentRomanNum] - romanSet[nextRomanNum];

      end -= 2;
    } else {
      value += romanSet[currentRomanNum];
      end -= 1;
    }
  }

  return value;
}
