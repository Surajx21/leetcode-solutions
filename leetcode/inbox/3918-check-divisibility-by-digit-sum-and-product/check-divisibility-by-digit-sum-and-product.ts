function checkDivisibility(n: number): boolean {
  let sum = 0;
  let product = 1;

    let temp = n

  while (temp != 0) {
    let rem = temp % 10;
    sum += rem;
    product *= rem;

    temp = Math.floor(temp / 10);
  }

  return n % (sum + product) === 0;
}

console.log(checkDivisibility(99));
