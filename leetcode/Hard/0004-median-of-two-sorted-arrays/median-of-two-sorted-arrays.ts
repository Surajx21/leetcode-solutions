function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let arr = [];

  let i = 0;
  let j = 0;

  while (i < nums1.length || j < nums2.length) {
    if (i === nums1.length) {
      arr.push(nums2[j]);
      j++;
      continue;
    } else if (j === nums2.length) {
      arr.push(nums1[i]);
      i++;
      continue;
    }

    if (nums1[i] < nums2[j]) {
      arr.push(nums1[i]);
      i++;
    } else {
      arr.push(nums2[j]);
      j++;
    }
  }

  let middle = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    return (arr[middle - 1] + arr[middle]) / 2;
  } else {
    return arr[middle];
  }
}
