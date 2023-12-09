/**
 给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。
 */
function removeDuplicates(nums: number[]): number {
  for (let i = 0; i < nums.length; ) {
    nums[i] === nums[i + 1]?nums.splice(i, 1):i++;
  }
  return nums.length;
}
// removeDuplicates([1, 1, 2]);
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
