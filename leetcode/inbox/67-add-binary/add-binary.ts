function addBinary(a: string, b: string) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry) {
    let x = i >= 0 ? a[i] : 0;
    let y = j >= 0 ? b[j] : 0;

    let sum = Number(x) + Number(y) + carry;

    switch (sum) {
      case 0:
        carry = 0;
        result = "0" + result;
        break;
      case 1:
        carry = 0;
        result = "1" + result;
        break;
      case 2:
        carry = 1;
        result = "0" + result;
        break;
      case 3:
        carry = 1;
        result = "1" + result;
        break;
    }

    i--;
    j--;
  }

  return result;
}

console.log(addBinary("11", "1"));
