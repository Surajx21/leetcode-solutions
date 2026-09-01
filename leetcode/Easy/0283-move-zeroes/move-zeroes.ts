/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let i = 0
    let j = 0

    while (i < nums.length && j < nums.length) {

        if (nums[i] === 0) {
            j = i + 1;
            while (nums[j] === 0) {
                j++;

            }
            if (j === nums.length) {
                return
            }
            nums[i] = nums[j]
            nums[j] = 0
        }

        i++
    }
};