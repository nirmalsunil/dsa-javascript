/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let max_so_far = nums[0];
  let curr_max = nums[0];
 let length=nums.length;
  for (let i = 1; i < length; i++)
  {
      curr_max = Math.max(nums[i], curr_max+nums[i]);
      max_so_far = Math.max(max_so_far, curr_max);
  }
 
return max_so_far;
    
};
