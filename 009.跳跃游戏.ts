/* 
    给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。
    判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。
    ! 只要能到就要，不管超没超过
*/
// function canJump(nums: number[]): boolean {
//   if (nums.length == 1) return true;
//   let index = 0;
//   let flag = false;
//   for (let i = index; i < nums.length; ) {
//     let item = nums[i];
//     index += item;
//     if (index >= nums.length - 1) {
//       flag = true;
//       break;
//     } else {
//       if (!item) break;
//       i += item;
//     }
//   }
//   return flag;
// }
function canJump(nums: number[]): boolean {
  // 先不用贪心算法，用数零法
  if (nums.length === 1) return true;
  let count = 0;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (count >= nums[i]) {
      count++;
    } else {
      count = 0;
    }
  }
  return count === 0;
}
//  console.log(canJump([2, 3, 1, 1, 4])); //  true
console.log(canJump([3, 2, 1, 0, 4])); // false
// console.log(canJump([2, 5, 0, 0])); // true
// console.log(canJump([0, 1])); // 预期false
// console.log(canJump([2, 0, 0])); // true
