function mySqrt(x: number): number {
  let la = Math.ceil(x / 2);
  for (var index = 0; index <= la; index++) {
    if (index * index === x) {
      return index;
    }

    if (index * index > x) {
      return index - 1;
    }
  }

  return index - 1;
}
