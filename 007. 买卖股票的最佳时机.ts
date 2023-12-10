/* 我的写法 */
function maxProfit2(prices: number[]): number {
  let flag: boolean = false;
  for (let i = 0; i < prices.length; ) {
    if (prices[i + 1] > prices[i]) {
      flag = true;
    }
    if (prices[i + 1] === prices[i]) {
      prices.splice(i, 1);
    } else {
      i++;
    }
  }
  if (!flag) return 0;
  let max: number = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let diff = prices[j] - prices[i];
      if (!max) {
        max = diff;
      }
      if (diff > max) {
        max = diff;
      }
    }
  }
  return max;
}

/* 别人的写法 */
// function maxProfit(prices: number[]): number {
//     let a = 0, b = prices[0]
//     for (let i = 1; i < prices.length; i++) {
//         b = Math.min(b, prices[i])
//         a = Math.max(a, prices[i] - b)
//     }
//     return a
// };
function maxProfit(array: number[]): number {
  let min = array[0];
  let max = array[0];
  let diff = max - min;

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (num < min) {
      min = num;
      max = num;
    }

    if (num > max) {
      max = num;
    }

    let d = max - min;
    if (d > diff) diff = d;
  }
  return diff;
}

let max = maxProfit([7, 2, 5, 3, 6, 1, 6]);
// let max = maxProfit([1, 2]);
console.log(max);
