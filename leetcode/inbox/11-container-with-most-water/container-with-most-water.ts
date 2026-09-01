function maxArea(height: number[]): number {
    let max = 0
    let i = 0
    let j = height.length - 1

    while (i < j) {
        const w = j - i
        const h = Math.min(height[i], height[j])
        const area = w * h

        if (area > max) {
            max = area
        }

        if (height[i] <= height[j]) {
            i++
        } else {
            j--
        }
    }


    return max

};