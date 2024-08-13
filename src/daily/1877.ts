function minPairSum(nums: number[]): number {
  nums = nums.sort();
  let maxSum = 0;
  for (let i = 0; i < (nums.length / 2); i++) {
    let curSum = nums[i] + nums[nums.length - i - 1];
    maxSum = Math.max(curSum, maxSum);
  }
  return maxSum;
}

const nums = [3, 5, 2, 3];
let minPairSumRes = minPairSum(nums);
console.log(minPairSumRes);
