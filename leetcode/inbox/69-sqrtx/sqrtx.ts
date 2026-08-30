function mySqrt(x: number): number {
  if (x < 2) return x;

  let left = 1;
  let right = Math.floor(x / 2);

  let answer = left;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (mid * mid === x) {
      return mid;
    }

    if (mid * mid < x) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return answer
}
