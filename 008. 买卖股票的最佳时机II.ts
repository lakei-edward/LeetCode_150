/* 
  给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
  在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
  返回 你能获得的 最大 利润 。
*/
function maxProfitII(prices: number[]): number {
  let min = prices[0];
  let max = prices[0];
  let diff = max - min;
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    let num = prices[i];
    if (num < min) {
      min = num;
      max = num;
    }
    if (num > max) {
      max = num;
    }
    let d = max - min;
    if (d > diff) {
      diff = d;
      // 总的利润
      total += diff;
      // 重置计算
      min = num;
      max = num;
      diff = 0;
    }
  }
  return total;
}
// maxProfitII([7, 1, 5, 3, 6, 4]);
// maxProfitII([1,2,3,4,5]);
maxProfitII([7, 6, 4, 3, 1]);
