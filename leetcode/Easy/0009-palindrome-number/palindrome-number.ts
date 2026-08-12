function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }

    let reversed = 0;
    let temp = 0;
    let number = x;

    while (number != 0) {
        let remainder = number % 10;
        temp = Math.floor(number / 10);
        reversed = reversed * 10 + remainder;
        number = temp;
    }

    return reversed === x;
}