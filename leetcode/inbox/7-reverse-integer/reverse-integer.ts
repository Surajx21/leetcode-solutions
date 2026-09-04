function reverse(x: number): number {
    let sign = x >= 0 ? 1 : -1
    let result = 0
    x = Math.abs(x)


    while (x != 0) {
        let remainder = x % 10;
        result = (result * 10) + remainder
        x = Math.floor(x / 10)

        if (result > Math.pow(2, 31) - 1){
            return 0;
        }
    }
    return sign * result
};