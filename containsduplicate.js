// I: array of integer nums -> O: true if any duplicate num, false otherwise
var containsDuplicate = function (nums) {
  /*
      iterate through all nums
      keep track of those who appear
          - hash table
              - key is num
  */
  let tracker = {};
  for (const [i, num] of nums.entries()) {
    if (tracker.hasOwnProperty(num)) return true;
    tracker[num] = i;
  }
  return false;
};
