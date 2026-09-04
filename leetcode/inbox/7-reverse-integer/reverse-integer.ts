function reverse(x: number): number {
    let sign = x >= 0 ? 1 : -1
    let result = 0
    let limit = sign === 1 ? Math.pow(2, 31) - 1 : Math.pow(2, 31)
    x = Math.abs(x)

    while (x != 0) {
        let remainder = x % 10;
        result = (result * 10)

        let remaining = limit - result

        if (remainder > remaining) {
            return 0
        }

        result += remainder
        x = Math.floor(x / 10)
    }
    return result * sign
};