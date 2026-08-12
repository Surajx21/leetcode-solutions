function twoSum(nums: number[], target: number): number[] {
    const hashMap = new Map<number, number>();

     for (let index = 0; index < nums.length; index++) {
        const val = nums[index];
        const point2 = target - val;
        const index2 = hashMap.get(point2);

        if (index2 !== undefined) {
            return [index2, index];
        }

        hashMap.set(val, index);
    }
};