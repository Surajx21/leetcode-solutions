function maxSubarrayLength(nums: number[], k: number): number {
  let maximum = 0;
  let left = 0;
  let right = 0;
  let freqMap = new Map<number, number>();

  while (right < nums.length) {
    let value = nums[right];
    let freqMapuency = freqMap.get(value) ?? 0;

    freqMap.set(value, freqMapuency + 1);

    while (freqMap.get(value) > k) {
      let elem = nums[left];
      freqMap.set(elem, freqMap.get(elem) - 1);
      left++;
    }

    maximum = Math.max(maximum, right - left + 1);
    right++;
  }

  return maximum;
}