/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (n === 0) {
    return;
  }

  let i = m - 1;
  let j = m + n - 1;
  let k = n - 1;

  while (k >= 0) {
    if (nums1[i] > nums2[k]) {
      nums1[j] = nums1[i];
      i--;
    } else {
      nums1[j] = nums2[k];
      k--;
    }
    j--;
  }
}
