/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let length=nums.length;
for( let index=0; index < length; index++){
    if(nums.indexOf(nums[index]) !== index )
        return true;
}
    return false;
};
