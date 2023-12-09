function majorityElement(nums: number[]): number {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }
  let flag: number = 0;
  map.forEach((value, key) => {
    if (value > Math.trunc(nums.length / 2)) {
      flag = key;
    }
  });
  console.log(flag);
  return flag;
}

// majorityElement([3, 2, 3]);
majorityElement([11, 12, 12, 5, 5, 5, 5, 5, 10]);
