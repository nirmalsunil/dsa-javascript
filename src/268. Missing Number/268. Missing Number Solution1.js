/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let n=nums.length;
    
    let actual_sum=nums.reduce((sum,num)=>(sum+=num),0 )
    
    let expected_sum=( n * (n+1))/2;
    
    return expected_sum - actual_sum;
    
    
};
