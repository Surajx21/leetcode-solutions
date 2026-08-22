function plusOne(digits: number[]): number[] {
  let carry = 0;
  for (let index = digits.length - 1; index >= 0; index--) {
    let elem = digits[index];

    let sum = index === digits.length - 1 ? elem + 1 : elem + carry;
    if (sum > 9) {
      carry = 1;
    } else {
      carry = 0;
    }
    digits[index] = sum % 10;
  }

  if (carry){
    digits.unshift(carry)
  }

  return digits;
}