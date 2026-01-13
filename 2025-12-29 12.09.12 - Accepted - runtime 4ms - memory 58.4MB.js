/**
 * @param {number[]} nums
  * @return {number[]}
   */
   var leftRightDifference = function(nums) {
       const n = nums.length;
           const result = new Array(n);
               let leftSum = 0, rightSum = nums.reduce((a, b) => a + b, 0);
                   for (let i = 0; i < n; i++) {
                           rightSum -= nums[i];
                                   result[i] = Math.abs(leftSum - rightSum);
                                           leftSum += nums[i];
                                               }
                                                   return result;
                                                   };