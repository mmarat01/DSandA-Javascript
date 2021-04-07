// I: array -> O: array where each element contains the running sum of the original

// 1 with O(n) space
const bruteRunningSum = (nums) => {
  let rsum = 0;
  let ans = [];
  for (let num of nums) {
    rsum += num;
    ans.push(rsum);
  }
  return ans;
};

// no extra space
const runningSum = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
};
