function reverse(x: number): number {
    let sign = x >= 0 ? 1 : -1
    let result = 0
    let limit = Math.pow(2, 31) - 1
    x = Math.abs(x)
    let i = 0;

    while (x != 0 && i < 10) {
        let remainder = x % 10;
        result = (result * 10) 

        let lmao = limit - result

        if (remainder >= lmao){
            return 0
        }
        
        result += remainder
        x = Math.floor(x / 10)
        i++
    }
    return result * sign
};