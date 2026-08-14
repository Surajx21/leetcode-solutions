function removeElement(nums: number[], val: number): number {
  let i = 0;
  let counter = i;
  let j = nums.length - 1;

  while (i <= j) {
    if (nums[j] === val) {
      j--;
    } else if (nums[i] === val) {
      nums[i] = nums[j];
      i++;
      counter++;
      j--;
    } else {
      i++;
      counter++;
    }
  }
  return counter;
}
