/**
 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。
 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */

function removeDuplicatesII(nums: number[]): number {
  // 因为有负数，不能用object，object是乱序，不是桉顺序的
  let map = new Map();
  const repeatTotal: number = 2;
  // 先把对应的出现的次数放入对象
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i] + "")) {
      map.set(nums[i] + "", map.get(nums[i] + "") + 1);
    } else {
      map.set(nums[i] + "", 1);
    }
  }

  let thenKey: number = 0;
  map.forEach((value, key) => {
    thenKey += value;
    // 对象中大于2次的
    if (value > repeatTotal) {
      // 获取大于2次需要删除开头的索引
      let headIndex = thenKey - value;
      // 获取需要删除的个数
      let removeNums = value - repeatTotal;
      nums.splice(headIndex, removeNums);
      thenKey -= removeNums;
    }
  });
  return nums.length;
}

// removeDuplicatesII([1, 1, 1, 2, 2, 3]);
removeDuplicatesII([0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5]);
// removeDuplicatesII([-1, 0, 0, 0, 0, 3, 3]);
