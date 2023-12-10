/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  while (k > 0) {
    nums.unshift(nums[nums.length - 1]);
    nums.pop();
    k--;
  }
}
// rotate([1, 2, 3, 4, 5, 6, 7], 3);
rotate([-1, -100, 3, 99], 2);
