function searchInsert(nums: number[], target: number): number {
  for (var index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element === target || element > target) {
      return index;
    }
  }
  return index;
}
