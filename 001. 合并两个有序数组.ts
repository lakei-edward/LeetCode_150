/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.splice(m, n);
  for (let i = 0; i < nums2.length; i++) {
    nums1.push(nums2[i]);
  }
  nums1.sort((a, b) => a - b);
}

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([0], 0, [1], 1);
