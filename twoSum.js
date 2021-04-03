// I: array of nums -> O: indices of 2 elements w traget sum

// 1. brute force
const bruteTwoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i != j) return [i, j];
    }
  }
};

// 2. 2 pass hash w some more ES6
const okTwoSum = (nums, target) => {
  let candidates = {};

  for (const [i, num] of nums.entries()) {
    candidates[num] = i;
  }

  for (const [i, num] of nums.entries()) {
    let comp = target - num;
    if (candidates.hasOwnProperty(comp) && candidates[comp] != i) {
      return [i, candidates[comp]];
    }
  }

  return [];
};

// 3. best 1 pass hash
const twoSum = (nums, target) => {
  let candidates = {};

  for (const [i, num] of nums.entries()) {
    let comp = target - num;
    if (candidates.hasOwnProperty(comp)) return [i, candidates[comp]];
    candidates[num] = i;
  }

  return [];
};
