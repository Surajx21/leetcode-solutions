function minimumDeletions(nums: number[]): number {
  if (nums.length <= 2) return nums.length;

  let minimumIndex = 0;
  let maximumIndex = 0;
  let totalLength = nums.length;

  for (let index = 0; index < totalLength; index++) {
    const element = nums[index];
    if (element > nums[maximumIndex]) {
      maximumIndex = index;
    }
    if (element < nums[minimumIndex]) {
      minimumIndex = index;
    }
  }

  const minFromLeft = minimumIndex + 1;
  const maxFromLeft = maximumIndex + 1;

  const minFromRight = totalLength - minimumIndex;
  const maxFromRight = totalLength - maximumIndex;

  return Math.min(
    Math.max(minFromLeft, maxFromLeft),

    Math.max(minFromRight, maxFromRight),

    minFromLeft + maxFromRight,

    maxFromLeft + minFromRight,
  );
}
